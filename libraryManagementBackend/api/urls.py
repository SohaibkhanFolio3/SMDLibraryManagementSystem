from django.urls import include, path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('login', views.CustomAuthToken.as_view()),
    path('signup', views.RegisterView.as_view()),
    path('', include(router.urls)),
    # path('download/<int:scrape_id>', views.download_scrape)
]
