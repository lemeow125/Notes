### Overview
An endpoint corresponds to a specific URL in your service. For example, the [localhost:8000/api/v1/books/1](http://localhost:8000/api/v1/books/1) would return the book with the ID=1.

In Django REST Framework, there are some key points you must take note of when writing your own API endpoints
- Database/SQL Table
- Model
- Serializer
- View
- URL

An API endpoint is built from the ground up, starting with the SQL Table. This section assumes you're familiar with SQL (you should be before proceeding with the other chapters!) and the Django Model previously discussed.

![image.png](_resources/7%20-%20Writing%20API%20Endpoints/f6d46eeef4a1644acda573cfd3c673f7_MD5.jpg)

The diagram above is a very rough oversimplification of how Django REST Framework works out of the box

### Model
As mentioned in the previous chapter, the Django model (models.py) defines the object you're intending to keep records of. Whether it be books, students, or menu items, the Django model you create serves as a reference which is then used to populate or create the table in your SQL database.

![image.png](_resources/7%20-%20Writing%20API%20Endpoints/8aafbc6d8b57c1b14e1982b559afc3d6_MD5.jpg)

When called from a serializer, a Django model returns a Python object.

### Serializer
A Django REST Framework serializer takes in a Django model and serializes it into JSON.

In other Python backend frameworks such as [Django Ninja](https://django-ninja.dev/) or [Flask](https://flask.palletsprojects.com), you often skip the serializer process altogether and return values directly.

![image.png](_resources/7%20-%20Writing%20API%20Endpoints/f18ff6ca2e734e8fa7f303466a9dc4fc_MD5.jpg)

Sample Code Snippet from Django Ninja

This is not the case with Django REST Framework.

Serializers define the model used using the class **Meta**. Using a DRF serializer, you can choose to specify which fields to return
![image.png](_resources/7%20-%20Writing%20API%20Endpoints/f5939f9b512e7c4b204129ff4d1b6c44_MD5.jpg)

The serializer above only returns 4 fields (id, username, email, full\_name). Any other fields are omitted such as age, birthday, and so on.

Serializers can be found in the `serializers.py` file of a Django REST Framework app.
#### Serializer - Validation
In addition to manipulating your model before JSON serialization, DRF serializers allow you to validate fields to ensure proper values are provided.
![image.png](_resources/7%20-%20Writing%20API%20Endpoints/972f5b24877092dabefa35683e9d8a37_MD5.jpg)

In the code snippet above, any fields specified as **required=True** will error out if no value is provided. You don't need to run it through your own checks.

#### Serializer - Custom Hooks  
Django REST Framework serializers contain different methods you can use to hook in custom functionalities.
![image.png](_resources/7%20-%20Writing%20API%20Endpoints/55d02092931568fb93eb38d7e0b35fb4_MD5.jpg)

In the code snippet above used for user registration, we can hook custom functions into the validate and create methods which would then be triggered when sending an HTTP POST request that uses our serializer.

The **validate** method is used to verify that a valid password is provided alongside other integrity checks.

The **create** method is also used to ensure that the password and username is set properly**.** In the example above, the user's **is\_active** property is set to **False** in the **create** method to make sure users have to activate their accounts via email.

This is just one of the few use cases for serializer methods, there's an **update** method too alongside others which you can check in the [official documentation](https://www.django-rest-framework.org/api-guide/serializers/).

### Note!
It's important to note that these DRF serializer methods are different from those in Django models. If you choose to use the Django admin panel instead to create your records, the hooks above will not work. The hooks we discuss here only apply to endpoints that use your Django REST Framework serializer.

Django itself provides its own validation through in your models **(models.py)** with methods such as **clean**, **pre\_save**, and **post\_save** with docs found [here](https://docs.djangoproject.com/en/5.1/ref/signals/).

While this may be confusing at first having two approaches to validation, it is important to note that Django and Django REST Framework are separate projects, with one being built on top of the other.

A good use-case for serializer-level validation would be the following;

- An API endpoint for managing (Create, Retrieve, Update, Delete) books for users where you'd need restrictions to stop readers from deleting books they don't own
- An API endpoint for administrators to manage books without restrictions

Each endpoint has their own set of restrictions and requirements so DRF serializer validation would work well here.

Django model validation on the other hand would work better with model field validation,

- Ensure a **User's** **age** matches their **birthday** and if not, throw an error
- Update an **Employee's Payroll** record to increase their **salary** if they are promoted to a higher **position**

The requirements above are irrelevant of the API endpoint used and so model-level validation works best.

Knowing where you should place your validation functions is something you will encounter later on. There's an excellent discussion on [GitHub](https://github.com/encode/django-rest-framework/discussions/7850) which includes view-level validation if you're interested.

If you're just starting off, this isn't something you should be too worried about. Just knowing that the serializer parses to JSON is plenty enough to get started with building CRUD apps.

### Views
If serializers convert the underlying model to JSON, then views return the web response. They are situated in the `views.py` file of a Django REST Framework app.
![](_resources/7%20-%20Writing%20API%20Endpoints/9bb3d5c0c6da24a9d80d81d1e5b4a716_MD5.jpeg)
Views take in HTTP requests passed in from the actual URL. You can specify a `queryset` to define what objects to return and specify a serializer which will be used to structure the returned data.

Much like with DRF serializers, you can customize them what's returned. This can be to check whether the user owns what he/she's modifying and then forbidding access, or something else entirely depending on your use case.
![](_resources/7%20-%20Writing%20API%20Endpoints/695f930d4993ff8d8f2ccf806bd9ca9f_MD5.jpeg)
If you're using Memcached or Redis, you'll most likely have it integrated here, similar to the example above. Caching is something you won't have to worry about right now and will be tackled in later sections.

### Note!
The concept of serializers only exist within Django REST Framework and APIs. If you're using only Django as a full stack framework, without any API endpoints and without Django REST Framework, you likely won't run into them at all.

Many of you will also notice that there's two ways to go about setting up restrictions, one within views and another in the serializer itself. This will be discussed further in the next section.
### URLs
URLs are the most self-explanatory part of this section. They define the URL that should be used for your API endpoint. They can be found in the `urls.py` file of your Django REST Framework app.
![](_resources/7%20-%20Writing%20API%20Endpoints/9c1af7c5c436fec290cc1dbda9c9ac5c_MD5.jpeg)

URLs must be included in your `urlpatterns`, otherwise, they will not be registered in your API.

You can build complex URLs by nesting paths, similar to what we've done with [4 - REST Framework Setup](4%20-%20REST%20Framework%20Setup.md) (e.g. `https://localhost:8000/api/v1/notifications/)
![](_resources/7%20-%20Writing%20API%20Endpoints/6a3d52433be9340109bf93795854e3b8_MD5.jpeg)

When using viewset templates, you will need to specify a router to handle generation of all the `GET`, `POST`, and `DELETE` actions among other things since viewsets are effectively templates.

If on the other hand, you're using [generic views ](https://www.django-rest-framework.org/api-guide/generic-views/), you can simply call them directly inside your `urlpatterns`

This will be discussed in further detail in [9 - Viewsets vs API Views (Work in progress)](9%20-%20Viewsets%20vs%20API%20Views%20(Work%20in%20progress).md)

Up next: [8 - Role-Based Access Control (RBAC) (Work in progress)](8%20-%20Role-Based%20Access%20Control%20(RBAC)%20(Work%20in%20progress).md)