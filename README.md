# node-capston-program

Services -

1. Search Service
2. Order Service
3. Aggreage Service
4. RabbitMQ Service
5. API Gateway

Monolithic vs Microservices architecture
----------------------------------------

Monolythic - 
1) All the services will be tightly coupled.
2) One service data may be dependent on other service data so if there will be changes in one service then other service will also be changed.
3) In Monolythic, all the functionalities of a project exist in a single codebase.


Disadvantages of Monolithic applications: 
1) It becomes too large with time and hence, difficult to manage.
2) We need to redeploy the whole application, even for a small change.
3) As the size of the application increases, its start-up and deployment time also increases.


Microservices -
1) All the services will be loosely coupled.
2) All services will be independent.
3) But services can communicate with other services using service registry.
4) If there’s any update in one of the microservices, then we need to redeploy only that microservice.


Why do we use API Gateway with Microservices - 
1) In microservices, there will be many services and many adderesses.

Benefits of using API Gateway-
1) API gateway helps to provide additional security to your microservices.
2) We can do Authentication/Authorization.
3) Retry Policy.


DOCKER -

Command for creating docker Image-
docker build -t image_name .

Command for running container-
docker container run --name web -p 3000:3000

Command for running docker-compose.yml file-
docker-compose pull
