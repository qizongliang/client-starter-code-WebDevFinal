# client-starter-code

This repository is the client (front-end) starter code for Final Project (CRUD Application).

### Use the following steps to set up and run the client (front-end) application on your local machine
1.	Download the GitHub repository ZIP file to your local machine and unzip it.
2. Start a terminal (e.g., Git Bash) on your local machine.
3.	Go into the "client-starter-code" folder, enter the command to install dependencies: `npm install` 
4.	Start the client application by entering the command: `npm start`
5.  Go to the file package.json and change the line, only if you're unable to start the client application
```
"start": "react-scripts start"
```
to
```
"start": "react-scripts --openssl-legacy-provider start"
```
6.	After the client application is successfully started, a web browser is automatically opened at the address: `http://localhost:3000`

Group Member: Qizong Liang, This is a solo project
