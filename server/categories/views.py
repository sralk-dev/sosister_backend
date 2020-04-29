from rest_framework import generics
from .models import Category
from all_serializers import CategorySerializer
from utils import ResultsSetPagination


class ListCategoriesView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = ResultsSetPagination


class SingleCategoryView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
