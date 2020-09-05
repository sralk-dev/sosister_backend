from rest_framework import generics
from .models import Recipe
from all_serializers import ListRecipeSerializer, SingleRecipeSerializer, CreateRecipeSerializer
from utils import ResultsSetPagination
from django_filters.rest_framework import DjangoFilterBackend
from .filters import RecipeFilter


class ListRecipesView(generics.ListCreateAPIView):
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateRecipeSerializer
        else:
            return ListRecipeSerializer
    queryset = Recipe.objects.all()
    pagination_class = ResultsSetPagination
    filterset_class = RecipeFilter


class SingleRecipeView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = SingleRecipeSerializer
    lookup_field = 'slug'
