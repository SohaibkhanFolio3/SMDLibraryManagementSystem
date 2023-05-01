# libraryManagementApp

## Installation and Setup

### Python Backend Server

- A python installation of version 3.9 or greater is required

- Install required libraries using the following command:

```
cd libraryManagementBackend
pip install -r requirements.txt
```

- Run the following commands to migrate database

```
python manage.py makemigrations
python manage.py migrate
```

requestuser

- Run the following command to start the server

```
python manage.py runserver
```

### React Native App

- Yet to be implemented

## Tasks Details

### Task 1 - Create DB Design

The database schema was created in this task. The following design was finalized after normalizations:

![image](https://user-images.githubusercontent.com/69202269/224475120-df6c434d-1898-4b88-91d8-dfcc9687fb13.png)

### Task 2 - Create API endpoints for Login/Signup

- [POST] /api/login
- [POST] /api/signup

### Task 3 - Create API endpoints for Book Management (only available for admin except get all books)

- [GET] /api/books - Get all books
- [GET] /api/books/{id} - Get a book
- [POST] /api/books/ - Add a book
- [PUT] /api/books/{id} - Update a book
- [DELETE] /api/books/{id} - Delete a book
- [POST] /api/add_more_copies/ - Add more copies for a book

### Task 4 - Create API endpoints for User (Issue/Return books)

- [GET] /api/bookings - Get all bookings for logged in user
- [GET] /api/bookings/{id} - Get a particular booking for logged in user
- [POST] /api/bookings/ - Create a booking
- [POST] /api/return_book/ - Return a book

### Task 5 - Create Login/Registration Screen

![image](https://user-images.githubusercontent.com/69202269/235446651-67abf254-cd51-4511-8683-dee605379d57.png)
![image](https://user-images.githubusercontent.com/69202269/235446671-a9226b9a-ea1b-405b-9732-aca6c8643bd0.png)

### Task 6 - Create Home Screen (Different for user and admin)

![image](https://user-images.githubusercontent.com/69202269/235446754-6adce89d-6549-4432-bfa2-8ea8e134f323.png)
![image](https://user-images.githubusercontent.com/69202269/235447021-4f4f5bec-ac54-492d-801f-2975087d99e7.png)


### Task 7 - Create Issue Book Screen

![image](https://user-images.githubusercontent.com/69202269/235446817-6ad74dcf-e548-4029-b4e9-5a12fe79d906.png)

### Task 8 - Create Show Issued Books Screen

![image](https://user-images.githubusercontent.com/69202269/235446847-777fe47d-3857-4867-9b2e-43656ed2b573.png)


### Task 9 - Create Manage Books Screens (only for admin)

![image](https://user-images.githubusercontent.com/69202269/235447041-5edddfe9-457a-4c9d-b7ee-9b30f11278b8.png)
![image](https://user-images.githubusercontent.com/69202269/235447103-3b8f293a-2b90-4bc9-963d-c4a64797abfb.png)


### Task 10 - Create Add Book Copies Screen (only for admin)

![image](https://user-images.githubusercontent.com/69202269/235447134-45eec9cb-8e50-4b08-8e1e-e8d093108597.png)

## Admin Credentials

Following are the admin credentials. Admin has the privilege to add/delete books.

Email: edsheeran1234@gmail.com
Password: edsheeran1234
