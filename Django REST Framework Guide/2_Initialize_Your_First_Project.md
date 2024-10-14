# Initialize your first Project

### Start a New Project

With your tooling properly set up in the previous chapter, you can now start with setting up your Django project.

Create a new folder for your project.

![[_resources/2_Initialize_Your_First_Project/4d6ba511be479a6749bc4baeb985aa54_MD5.jpg]]

And open the folder in your editor of choice, such as VSCode

![[_resources/2_Initialize_Your_First_Project/da331137b939a5faf4924ee8a21b3fca_MD5.jpg]]

Create a new Python virtual environment with Pipenv by running `pipenv shell`

![[_resources/2_Initialize_Your_First_Project/db56664f1d7fb30451131394845729c5_MD5.jpg]]

This will create a Pipfile in your project folder. This will track what packages you install in your virtual environment

![[_resources/2_Initialize_Your_First_Project/3567fe21bc31ff29f392e112cd1e9308_MD5.jpg]]
I highly suggest you install the [Python VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) at this step to help with your developer experience

![[_resources/2_Initialize_Your_First_Project/4997f4d3a648a6ab9f5ac19c8211374f_MD5.jpg]]
### Initialize Git

When working on software projects such as Django, you will need to be able to track small changes. We'll be using Git for that

We previously installed Git, now's the time to use it. In your terminal, run the command `git init`

![[_resources/2_Initialize_Your_First_Project/765336c9701ec47364bcd428b580e1ce_MD5.jpg]]

If successful, this will create a hidden .git folder in your project

![[_resources/2_Initialize_Your_First_Project/f1c979f796fda6b41f83a37744b469e2_MD5.jpg]]

There are some files in your projects that won't need to be tracked for changes (database files, and passwords!)

Download the gitignore file [here](https://fileserver.06222001.xyz/files/Bookstack/gitignore) below and drop it into your project's folder

![[_resources/2_Initialize_Your_First_Project/d5a36b65d64255b05bc81a1709ca1158_MD5.jpg]]

Make sure to rename this to **.gitignore** (take note of the dot before the filename!)

You can also choose to search for your own .gitignore template online for Django, whichever suits best for you.

### Select your Interpreter

Since you're using a virtual environment such as Pipenv, you will need to specify it to be used rather than the default Python installation

Press **CTRL + Shift + P** to open the VSCode menu and type in **Select Interpreter**.

![[_resources/2_Initialize_Your_First_Project/d4da2b316a92c4444c01272187355abd_MD5.jpg]]

Select the virtual Python environment you created earlier (eg. the one created from **pipenv shell)**

![[_resources/2_Initialize_Your_First_Project/9d0f73aa1a1929a62a482e23bf2e94b5_MD5.jpg]]

### Install Dependencies and Packages

To use Django, you'll need to install Django!

On your current project's code editor, open a terminal or command line and type in the command

`pipenv install django djangorestframework`

![[_resources/2_Initialize_Your_First_Project/0cfa5562ea461edb202130a6f49a7cea_MD5.jpg]]

This will update your Pipfile and create a Pipfile.lock to reflect the installed packages

![[_resources/2_Initialize_Your_First_Project/bb5d783ca5d693451fc98425856492b9_MD5.jpg]]
### Initialize the Project

In your code editor's terminal or command prompt, run the command 
`django-admin startproject PROJECT\_NAME`

![[_resources/2_Initialize_Your_First_Project/9fa2115388cde426285a656a7e9965d5_MD5.jpg]]](https://bookstack.06222001.xyz/uploads/images/gallery/2024-09/i5bimage.png)

Be sure to replace it with your own project name! I named mine **djangobackend**.

A new directory will be created, containing your Django project's files

[![[_resources/2_Initialize_Your_First_Project/a137cf212011825e092997818ff20658_MD5.jpg]]

Change your directory in the terminal to the folder just created eg. **cd PROJECT\_NAME**

![[_resources/2_Initialize_Your_First_Project/ab38fdac55d8d6331471d609707dfdb9_MD5.jpg]]

Once that's done, run the command `python manage.py runserver 0.0.0.0:8000` to start your Django project

![[_resources/2_Initialize_Your_First_Project/b281e8b8bd83d316d45c1d0e810ce0a1_MD5.jpg]]

Your Django project will now be visible on the URL **[https://localhost:8000](https://localhost:8000)**

![[_resources/2_Initialize_Your_First_Project/377f5134b0525b830116a64d7699368f_MD5.jpg]]