from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Recipe
from .serializers import ListRecipeSerializer, SingleRecipeSerializer, CreateRecipeSerializer


class ResultsSetPagination(PageNumberPagination):
    page_size = 40
    page_size_query_param = 'page_size'
    max_page_size = 1000


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
