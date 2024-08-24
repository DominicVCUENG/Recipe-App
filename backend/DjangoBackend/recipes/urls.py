from django.urls import path
from .views import RecipeListView, PendingRecipeCreateView

urlpatterns = [
    path('recipes/', RecipeListView.as_view(), name='recipe-list'),
    path('pending-recipes/', PendingRecipeCreateView.as_view(), name='pending-recipe-create'),
]