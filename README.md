# EasyRecipe
Easy Recipe is a website which helps to cook delicious dishes and the user an login to add his own recipes which can be used by the other users


Steps to run the project

To run the Frontend

Pre-requsites: 
1. NodeJS 18.x: Download and install from here https://nodejs.org/en/download/

Open terminal and type the following commands
1. clone the repo on to your local machine: https://github.com/AkkiPooja/EasyRecipe.git
2. cd EasyRecipe
3. cd recipewebsite
4. cd recipe-app 
5. npm install --legacy-peer-deps @material-ui/core   (Material core UI does not support react 18.x so need to use leagcy mode to install)
6. npm start
7. Front end will be running in local host n prot 3000: http://localhost:3000/

To start backend service/spring-boot app

Backend service can be run using 3 approaches. you can use any 1 approach:

General pre-requsites:

1. Install JDK 17 or lates versions and set JAVA_HOME variable: https://www.oracle.com/java/technologies/downloads/
2. Install SQL server and workbench: https://dev.mysql.com/downloads/mysql/ and provide username as: root and password as: 12345678 
3. Update this user name and password in code repo in: src/main/resources/application.properties
4. Open SQL workbench and and Run SQL schema to create Database and tables 
   In the code repo go to : recipewebsite/src/database.
   open the schema.sql and run the commands in SQL workbench

Approach using mvnw commands:

1. Open command prompt in Windows or terminal in Mac and go to Project folder
2. Go to EasyRecipe folder
3. cd recipewebsite
4. make sure sql server on
5. ./mvnw spring-boot:run

Using generated JAR file:

1. Download maven from here: https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.zip  and follow ZIP file installation intructions here: https://maven.apache.org/install.html
2. Open project in terminal
3. cd EasyRecipe (Go to easy recipe folder)
4. cd recipewebsite
5. Keep the sql server on
6. run comman: mvn clean install
7. Run this commandl: java -jar target/recipewebsite-0.0.1-SNAPSHOT.jar

Using IDE like IntelliJ

Pre-requisites: Download IntelliJ community version from here https://www.jetbrains.com/idea/download/#section=windows

1. Open IntelliJ IDE and import the project
2. inside recipewebsite folder, right click on "pom.xml" and choose "+Add as maven project"
3. Right click on pom.xml -> hover on "maven" -> click on "generate sources and update folders"
4. On the right side of IDE view click on maven view which opens panel on right side
5. got to "recipewebsites" -> Lifecycle and double click on "install" to install all depedencies
6. go to: /src/main/java/com/easyrecipe/recipewebsite/RecipewebsiteApplication.java and run the application



This is the front page of the website:
<img width="1498" alt="Screen Shot 2022-12-11 at 2 14 18 PM" src="https://user-images.githubusercontent.com/113392025/206923969-bcbf0d14-8302-4643-8f06-f2c90ddc709a.png">


Technologies used to build this app:

1. Spring Boot 
2. React
3. MySQL 
4. REST API's
5. JPA



