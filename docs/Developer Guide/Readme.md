# Automation Framework Generator (AFG) - Developer Guide
    The idea behind the AFG is to solve the problem of –  evaluating multiple tools every time and coming up with a solution that’s the best fit for the client requirements for a Test Automation solution. The main purpose of this is to save the time spent in the evaluation of multiple tools and how they fit into existing client test environments right from integration with Cloud / local infrastructure in place.

## Used Technology Stack
    1) Back End -> NodeJS , Express
    2) Database -> Mysql [Sequalise ORM]
    3) Modules ->  Nodemon, ShellJS, Cors, Morgan

## API Calls Fo Framework 

### Cypress API Calls 

| Request | URL | Body | Statuscode |
| ------- | --- | ---- | ---------- | 
| GET | localhost:4000/lang | - | 200 |
| GET |  localhost:4000/node/v | - | 200 | |
| GET |  localhost:4000/lang | - | 200 | |
| GET | localhost:4000/package-manager| - | 200 |
| GET | localhost:4000/lib | - | 200 | 
| GET | localhost:4000/lib/:id | - |200 |
| GET | localhost:4000/framework/:id | - | 200 |
|GET | localhost:4000/version/:id | - | 200 |
| POST | localhost:4000/generate-cypress | { "packageManager": "npm" , "framework": "cypress", "version" : "7.7.0", "reporter": "mochawesome" } | 200 |


### WebdriverIO API Calls 

| Request | URL | Body | Statuscode |
| ------- | --- | ---- | ---------- | 
| GET | localhost:4000/lang | - | 200 |
| GET |  localhost:4000/node/v | - | 200 | |
| GET |  localhost:4000/lang | - | 200 | |
| GET | localhost:4000/package-manager| - | 200 |
| GET | localhost:4000/lib | - | 200 | 
| GET | localhost:4000/lib/:id | - |200 |
| GET | localhost:4000/framework/:id | - | 200 |
|GET | localhost:4000/version/:id | - | 200 |
| POST | localhost:4000/generate-webdriverio |  {"packageManager": "npm", "framework": "mocha",	"version" : "v7","reporter" : "allure"}  | 200 |



### Robit framework API Calls 

| Request | URL | Body | Statuscode |
| ------- | --- | ---- | ---------- | 
| GET | localhost:4000/lang | - | 200 |
| GET |  localhost:4000/node/v | - | 200 | |
| GET |  localhost:4000/lang | - | 200 | |
| GET | localhost:4000/package-manager| - | 200 |
| GET | localhost:4000/lib | - | 200 | 
| GET | localhost:4000/lib/:id | - |200 |
| GET | localhost:4000/framework/:id | - | 200 |
|GET | localhost:4000/version/:id | - | 200 |
| POST | localhost:4000/generate-webdriverio |  {"packageManager": "pip", "framework": "robotframework", "library": "selenium", "version" : "4.1.1", "reporter" : "robot-reporter"} | 200 |
