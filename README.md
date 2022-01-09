# mtx-data-symphony
Project made for MTX Hackathon 2021 by Team DataSymphony.

## About the app
* This is a basket ball scoring event classifier.
* The development was divided into two parts.
    * The video classifier made in python using py-torch.
    * The website made in python Django and reactJS.


## How to run the app
> These steps were written such that anyone even beginners can run this app on their machines.
### Setting up the workspace.  
* Clone the repository using the following command.
    ```bash
    git clone https://github.com/benstindavis/mtx-data-symphony.git
    ```
* Navigate to the repository folder
    ```bash
    cd mtx-data-symphony
    ```
* Create a python virtual environment using the following command.
    ```bash
    python -m venv ./env
    ```
* Start the virtual environment using the script coresponding to your openrating system.
    * Windows 
        ```bash
            .\env\Scripts\activate.bat
        ``` 
    * Linux 
        ```bash
            .\env\Scripts\activate
        ```
* Install all the requirements using the following command.
    ```bash
    pip install -r DataSymphony/requirements.txt
    ```
* The workspace has been set up, if you faced no errors the your working directory tree should look like this.
    ```bash
    ├───DataSymphony/
    │   ├───DataSymphony/
    │   │   ├───asgi.py
    │   │   ├───settings.py
    │   │   ├───urls.py
    │   │   ├───wsgi.py
    │   │   └───__init__.py
    │   ├───external/
    │   │   └───processors.py
    │   ├───frontend/
    │   │   ├───public/
    │   │   ├───src/
    │   │   ├───.gitignore
    │   │   ├───package-lock.json
    │   │   ├───package.json
    │   │   └───README.md
    │   ├───main/
    │   │   ├───migrations/
    │   │   ├───admin.py
    │   │   ├───apps.py
    │   │   ├───models.py
    │   │   ├───serializers.py
    │   │   ├───tests.py
    │   │   ├───urls.py
    │   │   ├───views.py
    │   │   └───__init__.py
    │   ├───.gitignore
    │   ├───manage.py
    │   ├───Procfile
    │   └───requirements.txt
    ├───.gitattributes
    ├───.gitignore
    ├───LICENSE
    └───start.bat
    ```
### Building the application
#### Building the frontend
* Navigate to ```DataSymphony\frontend```
    ```bash
    cd DataSymphony\frontend
    ```
* Run the following command to install the node modules
    ```bash
    npm install
    ```
* Run the following command to build the react app.    
    ```bash
    npm run build
    ```

#### Building the backend(Django)
* Navigate back to parent directory.
    ```bash
    cd ..
    ```
* Run the following command, only run this command once
    ```bash
    python manage.py makemigrations
    ```

    ```bash
    python manage.py migrate
    ```

### Running the application
* Run the following the command to start the application, it will be hosted this (url)["http://127.0.0.1:8000/"].
    ```bash
    python manage.py runserver
    ```