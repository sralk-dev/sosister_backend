from django.urls import path
from . import views


app_name = 'recipes'

urlpatterns = [
    path('', views.ListRecipesView.as_view(), name='recipes_list'),
    path('<str:slug>', views.SingleRecipeView.as_view(), name='single_recipe'),
]
