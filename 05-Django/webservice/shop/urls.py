from django.urls import path
from shop.views import view_article

urlpatterns = [
    path('articles/<int:id>/', view_article),
]