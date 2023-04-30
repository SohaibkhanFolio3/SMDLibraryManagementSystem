from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.viewsets import ModelViewSet, mixins
from rest_framework.permissions import AllowAny
from .models import Book, Bookings
from .serializers import BookSerializer, BookingsSerializer, UserSerializer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
import json
from rest_framework import status

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_admin': user.is_staff,
            'mobile': user.mobile
        })


class RegisterView(generics.CreateAPIView):
    User = get_user_model()
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

class UserViewSet(ModelViewSet):

    User = get_user_model()
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BookViewSet(ModelViewSet):

    serializer_class = BookSerializer
    queryset = Book.objects.all()


class BookingsViewSet(ModelViewSet):

    serializer_class = BookingsSerializer

    def get_queryset(self):
        return Bookings.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)


@api_view(('POST', ))
@renderer_classes((JSONRenderer, ))
def return_book(request):

    try:
        print(request.body)
        book_id = int(json.loads(request.body).get("book_id"))
    except:
        return Response({"status": "error", "message": "No or invalid book_id"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist:
        return Response({"status": "error", "message": "Book for given book_id does not exist."}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        booking = Bookings.objects.get(user=request.user, book=book)
    except Bookings.DoesNotExist:
        return Response({"status": "error", "message": "Booking for given book_id does not exist."}, status=status.HTTP_400_BAD_REQUEST)

    booking.delete()
    book.quantity += 1
    book.save()

    return Response({"status": "success", "message": "Book successfully returned."}, status=status.HTTP_200_OK)

