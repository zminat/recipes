"""
URL configuration for recipes project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from api.views import homepage, category, recipe

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage, name='home'),
    path('categories/<int:category_id>', category, name='recipes-by-category'),
    path('recipes/<int:recipe_id>', recipe, name='recipe'),
    path('api/', include('api.urls')),
]
