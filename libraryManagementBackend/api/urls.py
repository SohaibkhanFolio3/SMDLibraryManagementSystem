from django.urls import include, path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'books', views.BookViewSet, basename='book')
router.register(r'bookings', views.BookingsViewSet, basename="booking")

urlpatterns = [
    path('login', views.CustomAuthToken.as_view()),
    path('signup', views.RegisterView.as_view()),
    path('return_book/', views.return_book),
    path('add_more_copies/', views.add_more_copies),
    path('', include(router.urls)),
    # path('download/<int:scrape_id>', views.download_scrape)
]
