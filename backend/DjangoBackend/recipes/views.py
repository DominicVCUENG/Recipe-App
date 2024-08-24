from django.shortcuts import render
from rest_framework import generics
from .models import Recipe, PendingRecipe
from .serializers import RecipeSerializer, PendingRecipeSerializer

class RecipeListView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class PendingRecipeCreateView(generics.CreateAPIView):
    queryset = PendingRecipe.objects.all()
    serializer_class = PendingRecipeSerializer
