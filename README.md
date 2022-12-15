# EasyRecipe
Easy Recipe is a website which helps to cook delicious dishes and the user an login to add his own recipes which can be used by the other users


Steps to run the project

To run the Frontend

Open terminal and type the following commands
1. clone the repo on to your local machine: https://github.com/AkkiPooja/EasyRecipe.git
2. cd EasyRecipe
3. cd recipewebsite
4. cd recipe-app 
5. npm install --legacy-peer-deps. (npm install  --legacy-peer-deps @material-ui/core)
6. npm start
7.  your frontend opens at locally <http://localhost:3001/>

To start the spring boot app
you can run the spring boot by using either of two approaches

Approach 1 using jar file:

1. cd EasyRecipe (Go to easy recipe folder)
2. cd recipewebsite
3. install mysql version 8.0: https://dev.mysql.com/downloads/mysql/
4. Go to application.properties file under recipewebsite/src/main/resources and update the sql username and password
5. Go to SQL workbench and excute schema.sql file under src/database
6. Keep the sql server on
7. Run this command on the terminal: java -jar target/recipewebsite-0.0.1-SNAPSHOT.jar


Approcah 2 using maven commands:

1. Go to EasyRecipe folder
2. cd recipewebsite
3. install mysql version 8.0: https://dev.mysql.com/downloads/mysql/
4. Go to application.properties file under recipewebsite/src/main/resources and update the sql username and password
5. Go to SQL workbench and excute schema.sql file under src/database
6. Keep the sql server on
7. mvnw spring-boot:run



This is the front page of the website:
<img width="1498" alt="Screen Shot 2022-12-11 at 2 14 18 PM" src="https://user-images.githubusercontent.com/113392025/206923969-bcbf0d14-8302-4643-8f06-f2c90ddc709a.png">


Technologies used to biuld this app:

1. Spring Boot 
2. React
3. MySQL 



