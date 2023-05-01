from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import Book, Bookings
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('password', 'email', 'first_name',
                  'last_name', 'is_staff', 'mobile')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(
            **validated_data
        )
        user.set_password(password)
        user.save()
        return user


class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = "__all__"


class BookingsSerializer(serializers.ModelSerializer):

    book = BookSerializer(read_only=True)
    book_id = serializers.SlugRelatedField(
        slug_field="id", queryset=Book.objects.all(), write_only=True, allow_null=True)
    user = UserSerializer(read_only=True)


    class Meta:
        model = Bookings
        fields = "__all__"

    def create(self, validated_data):
        book = validated_data.pop('book_id')
        try:
            booking = Bookings.objects.get(user=self.context['request'].user, book=book)
            raise serializers.ValidationError({"status": "error", "message": "Booking for this book already exists"}, code=400)
        except Bookings.DoesNotExist:
            pass

        if book.quantity < 1:
            raise serializers.ValidationError({"status": "error", "message": "Book has no available copies."}, code=400)
        
        book.quantity -= 1
        book.save()
        booking = Bookings(
            book=book,
            **validated_data
        )
        booking.save()
        return booking
