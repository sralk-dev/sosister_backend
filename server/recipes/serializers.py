from rest_framework import serializers
from .models import Recipe, Grade, Category
from django.contrib.auth.models import User


class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        exclude = kwargs.pop('exclude', None)

        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        if fields:
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)

        if exclude:
            disallowed = set(exclude)
            existing = set(self.fields)
            for field_name in disallowed:
                if field_name in existing:
                    self.fields.pop(field_name)
        


class UserSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class GradeSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'


class CategorySerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class RecipeSerializer(serializers.ModelSerializer):
    #TODO: single&list mode
    owner = UserSerializer(read_only=True, fields=('id', 'username'))
    grades = GradeSerializer(read_only=True, many=True, fields=('id', 'value'))
    categories = CategorySerializer(read_only=True, many=True, exclude=('description', 'poster'))

    class Meta:
        model = Recipe
        fields = ('id', 'owner', 'slug', 'description', 'cook_time',
                  'prep_time', 'grades', 'categories', 'dtcreate', 'views')
        depth = 2
