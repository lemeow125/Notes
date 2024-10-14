### Overview
Hosting your own service via the Service Queue project is easy and straightforward as we handle the infrastructure setup for you.

We however provide a network diagram on how it works under the hood for reference.

![Service Queue Hosted.drawio.png](_resources/Hosted%20Services/16f43185b4d19dfcb42d52395a885859_MD5.jpg)

### Project Requirements 
We require the following for all projects
- Compatible with ARM64 architecture as our server are a fleet of Orange Pi 5s
- Packaged via Docker with an included `docker-compose.yml`. Traditionally, there are two ways to do this; 
    - Provide the source code as-is including your provided .env file. The servers will then build the image/container before being served to the public.
    - Build Docker image of your service and push it to [Dockerhub](https://hub.docker.com/) in a private repository. You can then give us pull access to download the container so that we serve/run it for your intended use to the public

If you're using a single page application (SPA) framework such as React or Vue, you may opt to skip Docker containerization altogether. We can serve the compiled build as a static site directly. If you're instead using NextJS or a server-side rendered framework, please opt to use Docker in packing up your service instead.