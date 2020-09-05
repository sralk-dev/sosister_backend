import django_filters
from .models import Recipe
from django_filters.filters import OrderingFilter


class RecipeFilter(django_filters.FilterSet):
    dtcreate_min = django_filters.IsoDateTimeFilter(
        field_name='dtcreate', lookup_expr='gte')
    dtcreate_max = django_filters.IsoDateTimeFilter(
        field_name='dtcreate', lookup_expr='lte')
    title = django_filters.CharFilter(lookup_expr='startswith')
    dtcreate = django_filters.IsoDateTimeFilter()
    spent_time = django_filters.NumberFilter(
        field_name='spent_time', lookup_expr='lte')
    category = django_filters.CharFilter(field_name='categories__slug', lookup_expr='iexact')

    ordering = OrderingFilter(fields=('dtcreate', 'views', 'title'))


class Meta:
    model = Recipe
    fields = ['dtcreate', 'owner__id', 'owner__username',
              'title', 'categories__id', 'categories__slug', 'spent_time']
