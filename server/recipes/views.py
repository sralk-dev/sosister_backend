from rest_framework import generics
from .models import Recipe
from all_serializers import ListRecipeSerializer, SingleRecipeSerializer, CreateRecipeSerializer
from utils import ResultsSetPagination


class ListRecipesView(generics.ListCreateAPIView):
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateRecipeSerializer
        else:
            return ListRecipeSerializer
    queryset = Recipe.objects.all()
    pagination_class = ResultsSetPagination


class SingleRecipeView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = SingleRecipeSerializer
