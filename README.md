# Spicy Opinions

## Introduction

Spicy opinions is an application that allows users to post their deepest most intimate hot takes. Is soup a drink? Does pineapple belong on pizza? Find out here...

This project is currently in progress...

## Installation

To get a local copy up and running follow these steps

1. Clone the repo
   ```
   git clone https://github.com/elyhess/spicy_opinions
   ```
2. Install dependencies
   ```
    npm install
   ```
3. DB creation/migration
   ```
    npm run migrate
   ```
4. Add ENV variables (.env file in root dir)
   ```
    PORT=<port_num>
    DB_USER=<db_username>
    DB_NAME=<db_name>
    JWT_SECRET=<secret>
   ```
5. Run server
   ```
   npm run dev
