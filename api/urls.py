from django.urls import path

from api.views import CategoryListView, RecipesInCategoryListView, RecipeView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='api-categories'),
    path('categories/<int:category_id>', RecipesInCategoryListView.as_view(), name='api-recipes-by-category'),
    path('recipes/<int:recipe_id>', RecipeView.as_view(), name='api-recipe'),
]