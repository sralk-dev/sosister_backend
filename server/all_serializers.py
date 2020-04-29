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
    class Meta:
        model = Category
        fields = '__all__'


class IngridientSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Ingridient
        fields = '__all__'


class StepSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Step
        fields = '__all__'


class CreateRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        exclude = ('id', 'slug', 'dtcreate', 'dtupdate', 'views')


class ListRecipeSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True, fields=('id', 'username'))
    grades = GradeSerializer(read_only=True, many=True, fields=('id', 'value'))
    categories = CategorySerializer(
        read_only=True, many=True, exclude=('description', 'poster'))

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'owner', 'slug', 'description', 'cook_time',
                  'prep_time', 'grades', 'categories', 'dtcreate', 'views')


class SingleRecipeSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True, fields=('id', 'username'))
    grades = GradeSerializer(read_only=True, many=True, exclude=('recipe', ))
    categories = CategorySerializer(read_only=True, many=True)
    ingridients = IngridientSerializer(read_only=True, many=True)
    steps = StepSerializer(read_only=True, many=True, exclude=('recipe', ))
    title = serializers.CharField(max_length=200, required=False)

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'owner', 'slug', 'description', 'ingridients', 'cook_time',
                  'poster', 'steps', 'prep_time', 'grades', 'categories', 'views', 'dtcreate', 'dtupdate')
