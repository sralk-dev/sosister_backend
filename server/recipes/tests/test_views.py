from django.test import TestCase, Client
from django.urls import reverse
from recipes.models import Recipe, Grade, Step
from categories.models import Category
from ingridients.models import Ingridient
from django.contrib.auth.models import User
from all_serializers import ListRecipeSerializer, SingleRecipeSerializer, CreateRecipeSerializer
from rest_framework import status
from model_bakery import baker
import random


client = Client()


class RecipesList(TestCase):
    def setUp(self):
        self.recipes = baker.make('Recipe', _quantity=10, make_m2m=True)
        for recipe in self.recipes:
            steps = baker.make('Step', recipe=recipe)
        self.Ivan = baker.make('User')

    def test_get_recipes_list(self):
        response = client.get(reverse('recipes:recipes_list'))
        recipes_list = Recipe.objects.all()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        serializer = ListRecipeSerializer(recipes_list, many=True)
        self.assertEqual(response.data['results'], serializer.data)


class SingleRecipe(TestCase):
    def setUp(self):
        self.recipes = baker.make('Recipe', _quantity=10, make_m2m=True)
        for recipe in self.recipes:
            steps = baker.make('Step', recipe=recipe)
        self.Ivan = baker.make('User')

    def test_get_single_recipe(self):
        recipe_pk = random.choice(self.recipes).pk
        response = client.get(
            reverse('recipes:single_recipe', kwargs={'pk': recipe_pk}))
        recipe = Recipe.objects.get(pk=recipe_pk)
        serializer = SingleRecipeSerializer(recipe)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_update_single_recipe(self):
        recipe = random.choice(self.recipes)
        instance = baker.prepare('Recipe')
        payload = {
            'description': instance.description,
            'cook_time': instance.cook_time,
            'prep_time': instance.prep_time,
            'views': random.randrange(1, 999999)
        }
        response = client.put(reverse('recipes:single_recipe', kwargs={
                              'pk': recipe.pk}), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for param in payload:
            self.assertNotEqual(getattr(recipe, param), response.data[param])

    def test_delete_single_recipe(self):
        recipe_pk = random.choice(self.recipes).pk
        response = client.delete(
            reverse('recipes:single_recipe', kwargs={'pk': recipe_pk}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(len(Recipe.objects.filter(pk=recipe_pk)), 0)

    def test_get_nonex_single_recipe(self):
        recipe_pk = random.randrange(len(self.recipes), 999999)
        response = client.get(
            reverse('recipes:single_recipe', kwargs={'pk': recipe_pk}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_single_recipe(self):
        instance = random.choice(self.recipes)
        payload = {
            'title': instance.title,
            'description': instance.description,
            'prep_time': instance.prep_time,
            'cook_time': instance.cook_time,
            'owner': self.Ivan.pk,
            'categories': [1, 2, 3],
            'ingridients': [1, 2, 3]
        }
        response = client.post(
            reverse('recipes:recipes_list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        last_recipe = Recipe.objects.latest()
        serializer = CreateRecipeSerializer(last_recipe)
        self.assertEqual(response.data, serializer.data)
