from django.urls import path
from . import views


app_name = 'categories'

urlpatterns = [
    path('', views.ListCategoriesView.as_view(), name='categories_list'),
    path('<int:pk>', views.SingleCategoryView.as_view(), name='single_category'),
]
