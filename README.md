# QR Code Generator

The QR Code Generator is a React and Node.js-based web application that allows users to generate custom QR codes easily and efficiently. This application supports both API and WebSocket calls to generate QR codes, providing a fast and efficient QR code generation service with a guaranteed 40ms response time.

This README.md provides a comprehensive guide on setting up the project, its technical details, and how to use the API and WebSocket services.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Usage](#api-usage)
- [WebSocket Usage](#websocket-usage)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Node.js v14.x or higher
- npm v6.x or higher
- A modern web browser (Chrome, Firefox, Safari, etc.)

## Installation

1. Clone the repository:

```bash
$ git clone https://github.com/yourusername/QR-Code-Generator-Website.git
```

2. Change to the project directory:

```bash
$ cd QR-Code-Generator-Website
```

3. Install the required dependencies:

```bash
$ npm install
```

## Configuration

In the root directory of the project, create a `.env` file to store the application's environment variables. The required variables are:

```
REACT_APP_API_BASE_URL=<your-api-base-url>
REACT_APP_WEBSOCKET_URL=<your-websocket-url>
```

Replace `<your-api-base-url>` with the base URL of your API server and `<your-websocket-url>` with the WebSocket server's URL.

## Running the Application

To run the application in development mode, execute the following command:

```bash
$ npm start
```

The React application will start and automatically open in your default web browser at `http://localhost:3000`.

## API Usage

To generate a QR code using the API, send a POST request to the following endpoint:

```
/api/generate-qr-code
```

Include a JSON payload with the following properties:

- `input`: The data to be encoded in the QR code
- `scale` (optional): The scale factor for the QR code

Example request using `curl`:

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"input": "Hello, World!", "scale": 3}' <your-api-base-url>/api/generate-qr-code
```

## WebSocket Usage

To generate a QR code using the WebSocket service, follow these steps:

1. Connect to the WebSocket server at the specified URL (e.g., `ws://qr.hect.dev/ws`). Replace "qr.hect.dev" with the appropriate values for your deployment.

2. Send a JSON message with the following properties:
    - `input`: The data to be encoded in the QR code
    - `scale` (optional): The scale factor for the QR code

The server will respond with the QR code image data URL.

## Technical Details

### Frontend

The frontend of the application is built using React, a popular JavaScript library for creating user interfaces. The application uses React hooks for managing state and the context API for passing data through the component tree.

### Backend

The backend of the application is built using Node.js and Express, a popular web application framework for Node.js. The API server handles incoming requests, processes the payload, and generates QR codes using a QR code generation library.

### WebSocket Server

The WebSocket server is implemented using the `ws` library, a widely-used WebSocket library for Node.js. The server listens for incoming WebSocket connections, processes the messages received from clients, and generates QR codes in real-time. The generated QR codes are sent back to clients as data URLs.

### Deployment with Docker

The application is configured to be easily deployed using Docker and docker-compose. The provided `Dockerfile` and `docker-compose.yml` files set up the necessary services, ports, and environment variables for a seamless deployment experience. Follow these steps to deploy the application using Docker:

1. Ensure that you have Docker and docker-compose installed on your machine. If you don't have them installed, you can download Docker Desktop from the [official Docker website](https://www.docker.com/products/docker-desktop) for macOS and Windows or follow the installation instructions for Linux [here](https://docs.docker.com/engine/install/).

2. In the project directory, you will find the `Dockerfile` and `docker-compose.yml` files. The `Dockerfile` sets up a multi-stage build process, installs necessary dependencies, and sets up Nginx as the web server. The `docker-compose.yml` file specifies the services, ports, and environment variables for the application.

3. Open a terminal, navigate to the project directory, and run the following command to build and start the Docker containers:

```bash
$ docker-compose up -d
```

This command will build the application using the provided `Dockerfile`, create the specified services, networks, and containers, and start them in detached mode. The `-d` flag indicates that the containers should run in the background.

4. After the containers are up and running, you can access the application in your web browser at `http://localhost`. The React app will be served on port 80, and the API server will be running on port 9000.

5. If you need to stop the application, run the following command in the terminal:

```bash
$ docker-compose down
```

This command will stop and remove the containers, networks, and any related resources defined in the `docker-compose.yml` file.

Make sure to replace any placeholders in the `.env` file or any other configuration files with the appropriate values for your deployment before building and starting the Docker containers.

## Contributing

We warmly welcome and encourage contributions from anyone interested in this project! Whether you're an experienced developer or just getting started, we would love to have your help and input.

To contribute, you can start by:

1. Forking the repository and cloning it to your local machine.

2. Creating a new branch for your changes:

```bash
$ git checkout -b my-feature-branch
```

3. Making changes or adding new features to the codebase.

4. Committing your changes and pushing them to your fork:

```bash
$ git add .
$ git commit -m "Add my new feature"
$ git push origin my-feature-branch
```

5. Submitting a pull request (PR) to the original repository with a clear description of your changes or new features.

If you need help or have any questions about the project, feel free to open an issue or join our community discussion. We are here to help and support each other. Together, we can make this project better!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). This means you are free to use, modify, and distribute the code as you see fit, as long as you provide appropriate attribution and include the original license in any copies or substantial portions of the code.

For more information about the MIT License, please refer to the [LICENSE](https://github.com/yourusername/QR-Code-Generator-Website/blob/main/LICENSE) file in the repository.