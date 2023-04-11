FROM amazoncorretto:17-alpine-jdk   //de que imagen partimos
MAINTAINER Laura Maldonado   //quien es el dueño
COPY target/lauramaldonado-0.0.1-SNAPSHOT.jar  lauramaldonado-app.jar      //se copia el empaquetado a github
ENTRYPOINT ["java","-jar","/lauramaldonado-app.jar"]        //instruccion que se va a ejecutar primero 
