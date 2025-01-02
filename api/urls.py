from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from api.views import CategoryListView, RecipesInCategoryListView, RecipeView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='api-categories'),
    path('categories/<int:category_id>', RecipesInCategoryListView.as_view(), name='api-recipes-by-category'),
    path('recipes/<int:recipe_id>', RecipeView.as_view(), name='api-recipe'),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(), name='swagger-ui'),
]