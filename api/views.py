from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category, Recipe
from api.serializers import CategorySerializer, RecipesTitleSerializer, RecipeSerializer


def homepage(request):
    return render(request, 'index.html')

def category(request, category_id):
    return homepage(request)

def recipe(request, recipe_id):
    return homepage(request)


class CategoryListView(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecipesInCategoryListView(APIView):

    def get(self, request, category_id):
        category = get_object_or_404(Category, pk=category_id)
        recipes = category.recipes.all()
        serializer = RecipesTitleSerializer(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecipeView(APIView):

    def get(self, request, recipe_id):
        recipe = get_object_or_404(Recipe, pk=recipe_id)
        serializer = RecipeSerializer(recipe, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)