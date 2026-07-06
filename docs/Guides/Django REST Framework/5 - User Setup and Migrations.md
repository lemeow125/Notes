### Authentication with Djoser
Django REST Framework provides basic authentication out of the box, provided with the defaults located in **INSTALLED_APPS** under `settings.py`

To build robust applications however, you will need to more functionality than what it offers;
- Registration
- Account Activation (with activation codes sent via email)
- Password Resets (also sent via email)
- Session expiry with JSON Web Tokens (so that you don't just stay logged in forever)
- and so on...

These features are not built in to DRF, and so we'll have to bring in another package or library for this, [Djoser](https://github.com/sunscrapers/djoser)

To start, run the command `pipenv install djoser djangorestframework-simplejwt`

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/01b6f00e421a060ead2cb4270f9400c2_MD5.jpg)
Add **djoser** and **rest_framework_simplejwt** to **INSTALLED_APPS** under `settings.py`

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/87de24c7f1356d6ccfa6912512afb2a7_MD5.jpg)

You should also add the following code blocks to the end of your `settings.py`.

**REST_FRAMEWORK** will change the authentication type

**DJOSER** provides settings that you will use later on for user registration

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

DJOSER = {
    'SEND_ACTIVATION_EMAIL': True,
    'SEND_CONFIRMATION_EMAIL': True,
    'ACTIVATION_URL': 'activation/{uid}/{token}',
}
```

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/61fb00a8563bcf8df7b7084ebd050722_MD5.jpg)

Add the following to your **url_patterns** in `urls.py` file under the **api** app

```python
path('', include('djoser.urls')),
path('', include('djoser.urls.jwt'))
```

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/27ccf2739f021f87445e15e2c12c3de1_MD5.jpg)

Next step, models!

### Note!
If you've gotten this far, congratulations! If you're not familiar with basic and intermediate SQL or Python exercises yet, you may have trouble catching up in the following sections. Please consider learning those first or alongside the sections below.

### User Model
We've added authentication (Djoser) and so we will need to create our own concept of a user.

Models are the heart of backend development (not just Django!). While you may know what a car or a person is, your backend (Django) and your database have no idea how this should be structured.

A person can have the following

- Name
- Age
- Birthday

Cars can have them too! But you get my point.

Django already provides a default [User](https://docs.djangoproject.com/en/5.1/ref/contrib/auth/) model, hidden away from sight. We will be overriding and replacing this with our own.

To start, we will need to create a separate app.

In the previous section, we created a simple folder for the **api** app, this will not work for this step.

Instead, make sure you're inside the Django project directory by doing `cd PROJECT_NAME`, in my case, `cd djangobackend`

We will then create an **accounts** app. Run the command `python manage.py startapp accounts`
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/1acc5ed07b9837584efe9eef7b9f79f0_MD5.jpg)
This will create the **accounts** app
### Note!  
The best practice when creating Django apps would be naming them in plural form (Books, Records, Posts)

The Books app can hold
- Books
- Pages
- Chapters

Because of this, there is usually no need to make another app for pages and chapters as mentioned above, unless your app is big enough.

With that out of the way, let's begin creating our User model.

We will be creating our own version of a User based on the default one provided by Django [here](https://docs.djangoproject.com/en/5.1/ref/contrib/auth/)with an age and a birthday
```python
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Some fields are referenced or copied over from AbstractUser
    # first_name, last_name, email, username, and password are among a few of these

    birthday = models.DateTimeField(null=True)
    age = models.IntegerField(null=True)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
```

If we CTRL + Click on **AbstractUser**, we can take a deeper look under the hood on Django's default User
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/0729283d0df67dfa7dd1a4872e0c65c8_MD5.jpg)

By referencing **AbstractUser** on the User we're creating, we're can skip over creating the other fields a user would have (password, email) and the work that comes with how those work under the hood. This is something you will regularly see with Django and will make developing projects faster.

We'll now need to connect our **accounts** app and the **User** model to our existing project

Open the `admin.py` file in the **accounts** app and add the following code block.
```python
from django.contrib import admin
from .models import CustomUser

# Register your models here.
admin.site.register(CustomUser)
```

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/f8959f3ab5639965cbb7d889c8ca93c2_MD5.jpg)

This will register the model you just created into the Django admin panel (which you will look into later on).

You should then head over to your `settings.py` under the **config** app and add **accounts** to **INSTALLED_APPS**
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/0a19f2ef80c837f84ab52adef345e6d4_MD5.jpg)

Point your authentication to your new **User** model by adding this to `settings.py` under the **config** app
```python
AUTH_USER_MODEL = 'accounts.CustomUser'
```

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/337e74c775664852529ccbda519d08c6_MD5.jpg)

Next, you will need to shuffle some things around

Head back to the **accounts** app and create a `urls.py` file. Add the following code block
```python
from django.urls import path, include

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
]
```

You might notice that this is similar to what we have on the **api** app, we'll be moving these entries to here.

Now that we have those moved over, remove the entries for **djoser.urls** and **djoser.urls.jwt** in `urls.py` under the **api** app
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Instead, replace what we've removed with
```python
path('accounts/', include('accounts.urls')),
```

Things should look like this after

`urls.py` under **api** app
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/c9c5db2081729eb510dd4571bd3f37c0_MD5.jpg)
`urls.py` under **accounts** app
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/eda08eda23e505477f257e0445938247_MD5.jpg)

With this, your new **accounts** app is now connected.

### Migrations
Django and Django REST Framework (DRF) serves as an interface between your database (MySQL, PostgreSQL, SQLite) and the internet.

It **DOES NOT** hold your data. Rather, it serves as the **backend** to access said data.

![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/e5767bab6b1ac8f2e62c8e5beb427992_MD5.jpg)

This is an important distinction to make especially for starters. Exposing your database without a framework such as Django can allow malicious actors to easily make a mess of everything. Everything Django and DRF provides (authentication, middleware, etc.) serves this purpose.

Carrying on, migrations!

Migrations keep track of what types of kinds of things we wish to store. You previously created a **User** model **(accounts app)**.
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/1862970ccde9154f045c5140f0abf05c_MD5.jpg)
To apply these changes to your database, run the command `python manage.py makemigrations`

### Note!
Make sure you're inside the Django project directory! (e.g. `cd PROJECT\_NAME`)
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/d78e3aa3a9bf33079c0545dcb339d0ec_MD5.jpg)
This will create a migration file for your **User** model, which will instruct Django on how to create it inside your SQL database.

Taking a closer look at the newly created migrations file, you can see the following file in `accounts/migrations/0001\_initial.py`
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/0e771b2d300413c7e8ab63081cadfd17_MD5.jpg)

The previous command you just ran (`python manage.py makemigrations`) just translated your **User** model (located in `accounts/models.py`) into instructions which will then be used to create the SQL statements under the hood (e.g. `CREATE TABLE USER (username char, password ...)`)

Migrations are very analogous to sandwiches and burgers in a sense, if you decide to add a **grumpy** attribute to your **User**
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/ff7be23f2bc7166808ee3e0c008c9231_MD5.jpg)

and run `python manage.py makemigrations` again,
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/707051892fcf99a1b4a2eb274603dda0_MD5.jpg)

This will create a second migration file (`0002\_customuser\_grumpy.py`)
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/6b364981137d57591ce32bec05aaa582_MD5.jpg)

When you apply these migrations (which we will do shortly), Django reads each migration file in order, starting off with #1 to create the initial **User** model, and then to step #2 to add the **grumpy** field, which under the hood uses SQL Alter (e.g. `ALTER USER ADD grumpy boolean`).

Django's migrations will also let you know if you make changes to your models that might break things (e.g. removing an already added field when you have records for that already).

This is something you should ideally understand with Django and how it interfaces with your database under the hood.

### Apply Migrations
If you've noticed this error in the previous sections, this is because we haven't applied our migrations yet!
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/a4ed5645c21b33f9823d14533e4c3ef4_MD5.jpg)
With your user schema or template now set up, you should now apply these changes to the database.

Run the command `python manage.py migrate` to apply these changes
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/674a41f71ebe4925d9e40aaee89298bd_MD5.jpg)

This will apply your changes to the database, which by default is SQLite**,** the **db.sqlite3** file.

With that out of the way, running your Django project (`python manage.py runserver 0.0.0.0:8000`) will no longer yield the migration warning.
![image.png](_resources/5%20-%20User%20Setup%20and%20Migrations/cd1442083ceb8430c132da9bfc9b842f_MD5.jpg)

It's always important to apply your migrations before running your app, otherwise you might run into issues.

In the next section, you will be creating your first (superuser) account to access the Django admin panel.

Up Next: [6 - Django Admin](6%20-%20Django%20Admin.md)