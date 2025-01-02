from django.shortcuts import render, get_object_or_404
from drf_spectacular.utils import extend_schema
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

    @extend_schema(
        responses={
            200: CategorySerializer(many=True)
        },
        tags=['Category'],
        summary="Get a list of categories",
        description="Returns a list of all available categories."
    )
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecipesInCategoryListView(APIView):

    @extend_schema(
        responses={
            200: RecipesTitleSerializer(many=True)
        },
        tags=['Category'],
        summary="Get recipes in a category",
        description="Returns a list of all recipes in the specified category."
    )
    def get(self, request, category_id):
        current_category = get_object_or_404(Category, pk=category_id)
        recipes = current_category.recipes.all()
        serializer = RecipesTitleSerializer(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecipeView(APIView):

    @extend_schema(
        responses={
            200: RecipeSerializer(many=False)
        },
        tags=['Recipe'],
        summary="Get a recipe",
        description="Returns the details of a specific recipe."
    )
    def get(self, request, recipe_id):
        current_recipe = get_object_or_404(Recipe, pk=recipe_id)
        serializer = RecipeSerializer(current_recipe, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
