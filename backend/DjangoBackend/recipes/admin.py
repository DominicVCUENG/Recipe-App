from django.contrib import admin
from .models import Recipe, PendingRecipe

@admin.register(Recipe)
class RecipleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'ingredients', 'tags')

@admin.register(PendingRecipe)
class PendingRecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'ingredients', 'tags', 'submitted_at')
