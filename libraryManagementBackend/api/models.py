from django.db import models
from .managers import CustomUserManager
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

# Create your models here.


class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    mobile = models.CharField(max_length=15)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'mobile']

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Book(models.Model):

    title = models.TextField(null=False, blank=False)
    author = models.TextField(null=False, blank=False)
    quantity = models.IntegerField(null=False, blank=False)
    category = models.TextField(null=False, blank=False)
    cover_page_url = models.URLField()


class Bookings(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    booked_on = models.DateTimeField(auto_now_add=True, blank=True)
    booked_till = models.DateField(null=False)
