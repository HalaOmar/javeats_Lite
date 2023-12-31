
# Title

    Javeats Lite project

## Introduction

    Javeats Lite is a restaurant browsing and ordering system designed to simplify the 
    process of exploring restaurants, viewing menus and placing orders. The purpose of 
    this project is to provide a user-friendly platform for customers to discover and order 
    from a variety of restaurants.

## Technologies

    - Javascript : The core programming language for the project .

    - express    : It is a javascript framework build on nodejs platform used for building
                   web server, it provides a built-in routing functions and a pre-configured functions for 
                   handling request-response cycle .

    -Nodejs      : It is a software platform used for creating and developing web applications and desktop applications as well, it provide developer with a set of pre-configured modules for creating 
                   stand alone web server .

    - npm        :  It is a build automation tool used for managing dependencies, compiling 
                    source code, running tests and packaging the application .

    - Git        : It is a distributed  version control  used for tracking changes in source
                   code during development.

    - Sequelize  : It is used for Object-Relational Mapping(ORM), it maps javascript objects
                   to tables in the database.

    - Sequelize Command-Line Interface (CLI): The CLI ships support for migrations and project bootstrapping 



    - Passport   : It is a powerful framework for authenticating and authorizing http requests
                   and provides other security features for express applications.

    - MySQL      : It is used as database Management System for storing structured   data and complex relationships.

    - MongoDB    : It is non-relational Database Management system used for storing non-structured 
                   data, we will use it to store logs only.

    - Redis      : It is In-Memory database used as chashing system.

    - SuperTest  : It is a powerful unit test framework, it provides annotations and assertions
                   for write unit tests and ensure the correctness of the implemented 
                   functionalities.
              
    - Amazon Web Services-S3 buckets    : Buckets are containers for data stored in S3, we used it for storing images on Amazone data center.

    - RabbitMQ Server : RabbitMQ is an open-source message broker and intelligent message bus that receives messages from producers and routes them to one or more consumers. It’s a flexible messaging platform that has been designed from the ground up to interoperate with other messaging systems. It supports several messaging protocols such as AMQP, SMTP, STOMP, and HTTP for lightweight web messaging .
  
    - WebDataRocks : WebDataRocks is a free web reporting tool for data analysis and visualization.It is written in JavaScript and is not constrained by any external framework, WebDataRocks easily displays your CSV or JSON data in an interactive pivot table, offers a number of data analysis features, and provides a reporting experience.

## Features

### Dashboard Users

    - Admin can perfom all CRUD operations on all the entities in the system like restaurants
      orders details , customers, items , menus and carts .

    - The system will provide information about vendor purchases, inventory levels, menu item sales, labor productivity, and store profitability should be presented on a single dashboard managers and the home office has access to.
  
    - Provided reports include: the range of most to least profitable items, your best sellers, performance of labor force productivity, Detail Tasks and Duties .
    -  When stock levels decrease, place new orders that will go out to wholesale food suppliers for specific products and ingredients.


### Customers 

    - customers can easily explore different restaurants, view their menus, details including GPS
      and add items to their cart for a streamlined ordering process. 

    - Javeats Lite allows the user to create account and login securely.This feature enables
      personalized experiences such as order history tracking. 

    - customers can manage their carts, add items, modify quentity , delete items. The cart 
      provides a summary of the selected items and calculates the total cost, allowing the
      customer to review their order before processing to checkout.

    - customers will pay online by thier debit or credit cards using PAYPAL payment gateway  or off-line.

    - Javeats will help the customer to find the nearest restaurant to him by GPS tracking 
      system, find nearby places and display the results as clickable markers.
      see https://stackoverflow.com/questions/28229673/get-nearest-location-from-a-set-of-predefined-locations-with-google-maps-javascr


## Setup

to run the project :

   1. Clone the app locally
   2. npm install  ;  to install necessary dependencies. 
   3. npm start

For Migration using sequelize-cli see https://sequelize.org/docs/v6/other-topics/migrations/

For AWS you must to sign up for Amazone https://aws.amazon.com and login to your dashboard 
to utilize its Services.

For Paypal Checkout Integration see https://www.section.io/engineering-education/nodejs-paypal-checkout/ , https://developer.paypal.com/api/rest

For Passport authentication see https://github.com/jwalton/passport-api-docs

How To Create Google Maps API KEY For Free https://www.youtube.com/watch?v=OGTG1l7yin4

 