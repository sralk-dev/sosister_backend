from rest_framework import generics
from .models import Ingridient
from all_serializers import IngridientSerializer
from utils import ResultsSetPagination


class ListIngridientsView(generics.ListCreateAPIView):
    queryset = Ingridient.objects.all()
    serializer_class = IngridientSerializer
    pagination_class = ResultsSetPagination


class SingleIngridientView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingridient.objects.all()
    serializer_class = IngridientSerializer