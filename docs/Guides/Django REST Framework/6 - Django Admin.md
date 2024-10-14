### Admin Panel Overview
By default, all Django apps come with an administrator panel to manage all your models, this includes users too!

![image.png](_resources/6%20-%20Django%20Admin/b7491027aff381ac2c193b31c11750bf_MD5.jpg)

This is accessible via the URL [http://localhost:8000/api/v1/admin/](http://localhost:8000/api/v1/admin/)

In the admin panel, you can do CRUD operations on your models without having to create endpoints. This however is only accessible to administrators so you will have to continue building your API for general access later on. If you have more models, they will show up on the left-hand corner of the site. When selecting a model, such as one for **User**, you can view all instances/records and update, and delete them, hence CRUD (Create Retrieve Update Delete).

![image.png](_resources/6%20-%20Django%20Admin/3b19af469b3157aeaa13d0ed65efa4c4_MD5.jpg)

Right now, you won't be able to access it yet, you haven't made an administrator account after all. This will be outlined in the steps below.

### Note!
The theme above comes from the [django-unfold](https://github.com/unfoldadmin/django-unfold) library. The default design should look the same. You will run into the setup guide django-unfold and other libraries later on, so sit tight!

### Creating an Admin Account  
To create a superuser or administrator account. Open a terminal inside your Django project directory and run the command `python manage.py createsuperuser`
![image.png](_resources/6%20-%20Django%20Admin/37fd4cc32b79595791c1a0596156a54b_MD5.jpg)

Be sure to enter a secure password! Django has password validators built-in and may warn you.

![image.png](_resources/6%20-%20Django%20Admin/de9dd7f7b5589adcd14eb7a5358eeaa0_MD5.jpg)