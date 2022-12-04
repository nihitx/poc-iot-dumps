# poc-iot-dumps

### POC-IOT - Working Example
A video showing the application running. 
[![IMAGE ALT TEXT](http://img.youtube.com/vi/63rjcEUrUWU/0.jpg)](http://www.youtube.com/watch?v=63rjcEUrUWU "Video Title")
### POC-IOT - Folder Structure

    POC-IOT/
    ├── poc-front-end/
    │   ├── public
    │   ├── src -- storing all the components and functionality for running frontend
    │   ├── package.json
    │   ├── postcss.config.json 
    │   └── tailwind.config.js -- tailwind config
    └── poc/
        ├── src/
        │   ├── __tests__ -- hosting all the tests/
        │   │   └── unit
        │   ├── common
        │   └── services -- hosting business logic
        ├── index.js all the api routes
        └── package.json
        
This application is seperated into 2 repository
- poc
- poc-front-end

The poc repository is the backend of the application which is running on:
```sh
NODE JS
EXPRESS JS
```
The testing framework used on the poc repository is jest.

The poc-front-end repository is the front-end of the application which is running on:
```sh
REACT JS
NODE JS server
```
### compiling

To compile and run the server `poc` all you need to do is

`npm i`

and then 

`npm run dev`

this runs a server in the dev environment. 

To compile and run the server `poc-front-end` all you need to do is

`npm i`

and then 

`npm run start`

this runs a server in the dev environment. 

The POC runs on `PORT 3005`
THE poc-front-end runs on `PORT 3006`

if you face any issues running the application, please make sure those ports are not in used. 

### NEXT
Go to your fav web browser and run localhost:3006 to see the application
The backend URLS that will be available are 
│ POST | http://localhost:3005/ 
│ PUT | http://localhost:3005/window 
│ GET | http://localhost:3005/event 

### tests
tests is only avaiable in the poc application
to run tests all you need to do inside the poc directory is write
`npm run test`

The test framework that is being used is Jest. (https://jestjs.io/)