# Spicy Opinions

## Introduction

Spicy opinions is an application that allows users to post their deepest most intimate hot takes. Is soup a drink? Does pineapple belong on pizza? Find out here...

You can track my progress [here](https://github.com/elyhess/spicy_opinions/projects/1).

## Installation

To get a local copy up and running follow these steps

1. Clone the repo
   ```
   git clone https://github.com/elyhess/spicy_opinions
   ```
2. Install dependencies
   ```
    dir: /server
    npm install
   
    dir /client
    yarn install    
   ```
3. DB migration
   ```
    dir /server
    npm run migrate
   ```
4. Add ENV variables (.env file in /server root dir)
   ```
    PORT=<port_num>
    DB_USER=<db_username>
    DB_NAME=<db_name>
    JWT_SECRET=<secret>
   ```
5. Start servers
   ```
   dir /server
   npm run dev
   
   dir /client
   yarn start 
   ```
6. Visit localhost
   ```
   http://localhost:3000
   ```