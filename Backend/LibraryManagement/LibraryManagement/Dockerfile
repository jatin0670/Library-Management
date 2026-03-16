# step 1 - use a box that has Maven + Java to BUILD the app
FROM maven:3.9.6-eclipse-temurin-21 AS build

# step 2 - go to /app folder inside the box
WORKDIR /app

# step 3 - copy all your code into the box
COPY . .

# step 4 - build your Spring Boot project
RUN mvn clean install -DskipTests

# step 5 - now use a smaller box that only has Java to RUN the app
FROM eclipse-temurin:21-jre

WORKDIR /app

# step 6 - copy the built jar file from step 4
COPY --from=build /app/target/*.jar app.jar

# step 7 - run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

simple flow:
```
your code + Dockerfile → Docker builds everything → runs anywhere!