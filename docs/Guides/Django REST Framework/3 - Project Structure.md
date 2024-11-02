### Folder Hierarchy

Your project's root folder (the outer most) contains the following

- `Pipfile`, `Pipfile.lock` - to track your installed packages as mentioned previously
- `.gitignore` - to exempt some files from being tracked in your version control (Git)

#### Project Folder

![3a9acd103fc5ff4a63a7520951dc99b8_MD5](_resources/3%20-%20Project%20Structure/3a9acd103fc5ff4a63a7520951dc99b8_MD5.jpg)

The folder immediately proceeding your first one contains your Django project, created by the command `django-admin startproject PROJECT\_NAME` which you previously executed

This contains the following

- `manage.py` - The entry point to your Django app (e.g. the `python manage.py runserver` command and such)
- `db.sqlite3` - The default database file for Django, which uses [SQLite](https://www.sqlite.org/) (you can switch to PostgreSQL or MySQL later on)
- Another folder which contains your project's main config or app

#### Django Apps  


Django divides your projects into groups called apps. When you start a new project, you start off with your first app.

In this case, my first app is named `djangobackend`

![1f40b8e177d08862762cffe20f01e38f_MD5](_resources/3%20-%20Project%20Structure/1f40b8e177d08862762cffe20f01e38f_MD5.jpg)

That seems a bit confusing doesn't it?

#### Renaming the Config App

To make things clearer, you can opt to rename the main app of your Django project. These are the changes you must make

- Rename the main app folder to `config`

![bd12032f298e0a3e9d7c12999b231b77_MD5](_resources/3%20-%20Project%20Structure/bd12032f298e0a3e9d7c12999b231b77_MD5.jpg)

- Open `asgi.py` and change line 14 to point to **config.settings** instead of **PROJECT_NAME.settings**

![9a3064d2cb4d17b632358d10dfbdcc22_MD5](_resources/3%20-%20Project%20Structure/9a3064d2cb4d17b632358d10dfbdcc22_MD5.jpg)

- Do the same for the `wsgi.py` file, also in line 14

![6846e765a92401a0768a60fab29151f9_MD5](_resources/3%20-%20Project%20Structure/6846e765a92401a0768a60fab29151f9_MD5.jpg)

- Go to `settings.py` and set **ROOT_URLCONF** in line 52 to **config.urls** instead of **PROJECT_NAME.urls**

![8a0ab212600d24de9fb70656e810e603_MD5](_resources/3%20-%20Project%20Structure/8a0ab212600d24de9fb70656e810e603_MD5.jpg)

- Do the same for **WSGI_APPLICATION** in `settings.py`, line 70

![42ab80ce78c1158e8af47ddf9631c027_MD5](_resources/3%20-%20Project%20Structure/42ab80ce78c1158e8af47ddf9631c027_MD5.jpg)

- In `manage.py`, change line 19 to point to **config.settings** instead of **PROJECT_NAME.settings**

[![29904325362d967d3e9fe79941ae3589_MD5](_resources/3%20-%20Project%20Structure/29904325362d967d3e9fe79941ae3589_MD5.jpg)

With that, you should be good to go. Double check your setup by starting the Django app once again

![d85a379bdec6197afff6e37bd79359a2_MD5](_resources/3%20-%20Project%20Structure/d85a379bdec6197afff6e37bd79359a2_MD5.jpg)

If you followed everything correctly, you should see the same page as before

![9e9b9a07ac2b8066670d18d04a97627c_MD5](_resources/3%20-%20Project%20Structure/9e9b9a07ac2b8066670d18d04a97627c_MD5.jpg)

### Setting up DRF

Your current setup only includes Django. To proceed with Django REST Framework, we will need to add it to our project.

You've already installed Django REST Framework in the previous steps (e.g. `pipenv install django djangorestframework`).

To register it as an app in our project. Open your `settings.py` file and look for the **INSTALLED_APPS** section

![5bc2f2801c226ade60ad52496486ff78_MD5](_resources/3%20-%20Project%20Structure/5bc2f2801c226ade60ad52496486ff78_MD5.jpg)

Add **rest_framework** to **INSTALLED_APPS**

![c327ae10edcfd245d0ad4cfe787bf9ae_MD5](_resources/3%20-%20Project%20Structure/c327ae10edcfd245d0ad4cfe787bf9ae_MD5.jpg)

The next section will then tackle building a REST API with DRF.

Up Next: [4 - REST Framework Setup](4%20-%20REST%20Framework%20Setup.md)