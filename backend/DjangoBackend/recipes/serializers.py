from rest_framework import serializers
from .models import Recipe, PendingRecipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class PendingRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PendingRecipe
        fields = '__all__'
