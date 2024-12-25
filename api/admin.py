from django.contrib import admin
from .models import Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')


admin.site.register(Category, CategoryAdmin)