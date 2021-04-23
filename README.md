# Potential Brocoli


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [API Documentation](#api-documentation)
* [Setup](#setup)

## General info
School project
// todo: make description de bg
	
## Technologies
### Frontend
* ReactJS
* Styled-components
* TypeScript
* Axios (to fetch data)

### Backend
* NodeJS / Express
* Mongoose

  

## API DOCUMENTATION
(soon with swagger.io...)


| route        | method      | description |
| -------------|-------------|-------------|
| AUTH         |     🔐         |     🔐        |
| `/auth/register` | POST    |      	   |
| `/auth/login`     | POST    |             |
| USER             |     🕺    |       🕺        |
| `/user/me`       | GET     | get user data connected      	   |
| `/user/update-credentials`     | PATCH   |   update user table with credentials          |
| CUSTOMER         |      🛍       | 🛍    |
| `/customers/:id`     | GET   |             |
| `/customers/:id`     | POST   |      create customer       |
| `/customers/sponsor`     | PATCH   |             |


## Setup
To run this project, install it locally using npm:

```
$ cd ../potential-brocoli-frontend
$ npm i
$ npm start
```
