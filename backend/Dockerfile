FROM eclipse-temurin:17

# Create work directory
WORKDIR /app

# Copy the certificate to connect to database
COPY stagging/master-reactor-395418-866dd15b8e73.json src/main/resources/master-reactor-395418-866dd15b8e73.json 

#Copy the generated jar
COPY  stagging/backend-0.0.1-SNAPSHOT.jar backend.jar

#Execute the jar
ENTRYPOINT ["java", "-jar", "backend.jar"]

# Make the app available on port 8080
EXPOSE 8080