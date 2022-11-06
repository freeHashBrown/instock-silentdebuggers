# InStock Client

An Inventory Management System for a client that maintains a list of warehouses. The app has full CRUD functionality. Built by a team of three web developers using Agile methodology and daily scrums.
Built with MVC pattern in mind. Source of data is a MySQL database. Using knex.js to interact with the db. 
A [backend-end server](https://github.com/jpatel98/instock-api-silentdebuggers) accompanies this app.

## Tech Stack

![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
## Run Locally

To run the server side locally, clone the project

```bash
  git clone git@github.com:freeHashBrown/instock-silentdebuggers.git
```

Go to the project directory

```bash
  cd instock-silentdebuggers
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run start
```

## Environment Variables
Add the following variables in .env file for both
```
REACT_APP_WAREHOUSE_ENDPOINT = https://localhost:8080/warehouses
```
```
REACT_APP_INVENTORY_ENDPOINT = https://localhost:8080/inventories
```
## Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/6430e311-3b8d-4f7a-8aec-bdcb672e4c0f/deploy-status)](https://app.netlify.com/sites/instock7/deploys)
The frontend has been deployed on netlify - https://instock7.netlify.app/

And the server has been deployed on heroku with JawsDB provisioning the DB.
## Screenshots

![App Screenshot](https://i.imgur.com/ZbrYgzr.png)

![App Screenshot](https://i.imgur.com/9PLCKQ7.png)

![App Screenshot](https://i.imgur.com/iZaJjl4.png)

![App Screenshot](https://i.imgur.com/ZjJ3iZF.png)
