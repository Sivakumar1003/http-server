# Basic HTTP Server in Node.js (Master Branch)

This project contains a simple HTTP server implementation using Node.js.

## Project Structure
```
└── http.js # Basic HTTP server implementation 
```

## How to Run

1. **Clone the repository**:
   ```
   git clone https://github.com/Sivakumar1003/http-server.git
   ```
2. **Navigate to the directory**:
    ```
    cd http-server
    ```
3. **Run the server**:
    ```
    node http.js
    ```

## Features
* Basic HTTP server responding to incoming requests.
* Serves responses on a specified port.

## Available Routes
* **/** : Serves index.html from the public directory.
* **/html** : Responds with a basic HTML content.
* **/json** : Responds with a JSON object.
* **/uuid** : Generates and returns a UUID.
* **/status/200** : Returns a 200 OK status.
* **/delay/2** : Delays response by 2 seconds.
---

### Made with ❤️ by [Sivakumar Nanchappan]