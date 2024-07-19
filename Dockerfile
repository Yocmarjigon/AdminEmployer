FROM openjdk:21
EXPOSE 8080
COPY target/adminEmployer-0.0.1-SNAPSHOT.jar java-app.jar
ENTRYPOINT ["java","-jar","/java-app.jar"]