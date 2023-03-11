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

### Task 2 - Develop Backend Endpoints for Registration/Login

In this task, the API endpoints for user login and signup were created. They are as follows:

- [POST] /api/login
- [POST] /api/signup
