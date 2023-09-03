FROM eclipse-temurin:17

WORKDIR /app

COPY src/main/resources/master-reactor-395418-866dd15b8e73.json src/main/resources/master-reactor-395418-866dd15b8e73.json 

COPY  stagging/backend-0.0.1-SNAPSHOT.jar backend.jar

ENTRYPOINT ["java", "-jar", "backend.jar"]

EXPOSE 8080