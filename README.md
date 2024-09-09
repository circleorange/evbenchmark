# EV Benchmarks

### Structure

The project ("EV Benchmarks") contains two applications; 
- Backend: Spring Boot
- Frontend: React

Spring backend exposes REST API endpoints, while the React frontend is built to only hits those endpoints. 
This produces two loosely coupled applications.

### Build

When building the application, the React application needs to be compiled to 
produce build/ files before compiling the Spring application.

Maven configurations ("pom.xml") already contain the build step to run npm
and produce the necessary frontend files before compiling the java project.

To start the application, run: 
> EvBenchmarkApplication