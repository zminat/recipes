from rest_framework import serializers

from api.models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class RecipesTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'name']


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['name', 'text']