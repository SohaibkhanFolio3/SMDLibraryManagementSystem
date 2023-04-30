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

### Task 3 - Create API endpoints for Book Management (only available for admin)

- [GET] /api/books - Get all books
- [GET] /api/books/{id} - Get a book
- [POST] /api/books/ - Add a book
- [PUT] /api/books/{id} - Update a book
- [DELETE] /api/books/{id} - Delete a book

## Admin Credentials

Following are the admin credentials. Admin has the privilege to add/delete books.

Email: edsheeran1234@gmail.com
Password: edsheeran1234
