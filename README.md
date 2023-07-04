# Online food ordering System

<h2>Services</h2>
<ol>
<li> Search Service:</li>
<ul>
<li><b>Create Restaurant:</b> Add restaurant</li>
<li><b>Search Restaurant:</b> Search restaurants.</li>
</ul>
<li> Order Service: </li>
<ul>
<li><b>Place an order:</b> Create an order at the restaurant.</li>
<li><b>Cancel order:</b> Cancel your order at the restaurant.</li>
<li><b>Fetch orders:</b> Get your order details.</li>
<li><b>Calculate the amount:</b> Based on the number of items ordered per order.</li>
</ul>
  <li> Aggregate Service</li>
<ul>
<li><b>Fetch Order By City</b></li>
<li><b>Calculate Orders Amount By City</b></li>
</ul>
  <li>API Gateway</li>
<ul>
<li><b>Use the express</b>: gateway npm package.</li>
  Express Gateway is an open-source API gateway that is commonly used in microservices and API-driven architectures.
  Express Gateway acts as a centralized entry point for all incoming API requests, allowing you to control and manage access to your APIs. It provides functionalities like authentication, authorization, rate limiting, and request/response transformations.
</ul>
<li>RabbitMQ Service</li>
</ol>


Monolithic vs Microservices architecture
----------------------------------------

Monolithic - 
1) All the services will be tightly coupled.
2) One service data may be dependent on other service data so if there will be changes in one service then the other service will also be changed.
3) In Monolithic, all the functionalities of a project exist in a single codebase.


Disadvantages of Monolithic applications: 
1) It becomes too large with time and hence, difficult to manage.
2) We need to redeploy the whole application, even for a small change.
3) As the size of the application increases, its start-up and deployment time also increases.


Microservices -
1) All the services will be loosely coupled.
2) All services will be independent.
3) But services can communicate with other services using the service registry.
4) If there’s any update in one of the microservices, then we need to redeploy only that microservice.


Why do we use API Gateway with Microservices - 
1) In microservices, there will be many services and many addresses.

Benefits of using API Gateway-
1) API gateway helps to provide additional security to your microservices.
2) We can do Authentication/Authorization.
3) Retry Policy.


DOCKER -

The command for creating docker Image-
docker build -t image_name.

The command for running the container-
docker container run --name web -p 3000:3000

The command for running the docker-compose.yml file-
docker-compose pull
