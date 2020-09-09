from recipes.models import Recipe, Grade, Step
from categories.models import Category
from ingridients.models import Ingridient
from rest_framework import serializers
from django.contrib.auth.models import User
from utils import DynamicFieldsModelSerializer


class UserSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class GradeSerializer(DynamicFieldsModelSerializer):
    owner = UserSerializer(read_only=True, fields=('id', 'username'))

    class Meta:
        model = Grade
        fields = '__all__'


class CategorySerializer(DynamicFieldsModelSerializer):
    recipes_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'title', 'slug', 'poster',
                  'description', 'recipes_count')

    def get_recipes_count(self, obj):
        return obj.recipe_set.count()


class IngridientSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Ingridient
        fields = '__all__'


class StepSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Step
        fields = '__all__'


class CreateRecipeSerializer(serializers.ModelSerializer):
    steps = StepSerializer(many=True, exclude=('recipe', 'id'))

    class Meta:
        model = Recipe
        exclude = ('id', 'slug', 'dtcreate', 'dtupdate', 'views')

    def create(self, validated_data):
        steps_data = validated_data.pop('steps')
        categories = validated_data.pop('categories')
        ingridients = validated_data.pop('ingridients')
        recipe = Recipe.objects.create(**validated_data)
        recipe.categories.add(*categories)
        recipe.ingridients.add(*ingridients)
        for step_data in steps_data:
            Step.objects.create(recipe=recipe, **step_data)
        return recipe


class ListRecipeSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True, fields=('id', 'username'))
    grades = GradeSerializer(read_only=True, many=True, fields=('id', 'value'))
    categories = CategorySerializer(
        read_only=True, many=True, exclude=('description', 'poster'))

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'owner', 'slug', 'description', 'cook_time',
                  'prep_time', 'spent_time', 'grades', 'categories', 'dtcreate', 'views', 'poster')


class SingleRecipeSerializer(serializers.HyperlinkedModelSerializer):
    owner = UserSerializer(read_only=True, fields=('id', 'username'))
    grades = GradeSerializer(read_only=True, many=True, exclude=('recipe', ))
    categories = CategorySerializer(read_only=True, many=True)
    ingridients = IngridientSerializer(read_only=True, many=True)
    steps = StepSerializer(read_only=True, many=True, exclude=('recipe', ))
    title = serializers.CharField(max_length=200, required=False)
    lookup_field = 'slug'
    extra_kwargs = {
        'url': {'lookup_field': 'slug'}
    }

    class Meta:
        model = Recipe
        fields = (
            'id',
            'title',
            'owner',
            'slug',
            'description',
            'ingridients',
            'cook_time',
            'prep_time',
            'spent_time',
            'poster',
            'steps',
            'grades',
            'categories',
            'views',
            'dtcreate',
            'dtupdate')
