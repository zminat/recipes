from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    category = models.ManyToManyField(Category, related_name='recipes')
    text = models.TextField(verbose_name='Описание рецепта')