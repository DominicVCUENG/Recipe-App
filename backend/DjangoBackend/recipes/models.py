from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    ingredients = models.TextField()
    tags = models.CharField(max_length=200)

class PendingRecipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    ingredients = models.TextField()
    tags = models.CharField(max_length=200)
    submitted_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
