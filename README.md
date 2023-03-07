# Spring to Flask Web App Converter

Spring to Flask Web App Converter is a simple web application that allows you to convert a Spring web application to a Flask application. The application provides a user-friendly interface for uploading your Spring web application and downloading the corresponding Flask application.

## Features

- Upload your Spring web application as a ZIP file.
- Convert the Spring web application to a Flask application.
- Download the Flask application as a ZIP file.

## Technologies

The Spring to Flask Web App Converter uses the following technologies:

- Spring Boot
- Flask
- Python Flask
- Python ZipFile library
- HTML/CSS

## Getting Started

To run the Spring to Flask Web App Converter, follow these steps:

1. Clone the repository to your local machine.
2. Open the `spring-to-flask-web-converter` directory in your terminal.
3. Build the Spring Boot application using Maven:

    ```
    $ mvn clean install
    ```

4. Start the Flask application:

    ```
    $ cd flask
    $ virtualenv venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt
    $ python app.py
    ```

5. Open your web browser and navigate to `http://localhost:5000`.

## Usage

1. Click on the "Choose File" button to select your Spring web application ZIP file.
2. Click on the "Convert" button to start the conversion process.
3. Once the conversion is complete, click on the "Download" button to download the Flask application ZIP file.

## Configuration

The Spring to Flask Web App Converter can be configured using the following environment variables:

- `SPRING_WEB_APP_DIR`: The directory where the uploaded Spring web application ZIP file will be extracted to.
- `FLASK_APP_DIR`: The directory where the generated Flask application ZIP file will be created in.

By default, the application uses the following directories:

- `SPRING_WEB_APP_DIR`: `/tmp/spring-web-app`
- `FLASK_APP_DIR`: `/tmp/flask-app`

## License

The Spring to Flask Web App Converter is open source software released under the MIT license.
