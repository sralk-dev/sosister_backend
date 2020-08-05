from django.urls import path
from . import views


app_name = 'ingridients'

urlpatterns = [
    path('', views.ListIngridientsView.as_view(), name='ingridients_list'),
    path('<int:pk>', views.SingleIngridientView.as_view(), name='single_ingridient'),
]
