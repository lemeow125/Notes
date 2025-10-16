### Overview
Hosting your own service via the Service Queue project is easy and straightforward as we handle the infrastructure setup for you.

We however provide a network diagram on how it works under the hood for reference.

````mermaid
flowchart TD;

    Users("👥 Users")
    Internet("🌐 Internet")
    Proxy["🔄 Reverse Proxy<br/>🚀 Nginx<br/>"]
    Frontend["🗄️ Docker Container<br/>📱 Frontend App<br/>"]
    Backend["🗄️ Docker Container<br/>🔧 Backend API<br/>"]
    Server("🖥️ Server")

    Users --> Internet
    Internet --> Proxy
    Proxy --> Server

    Server --> Backend
    Server --> Frontend
    Frontend -.->|"📞 API Calls<br/>🔐 Auth"| Backend
    
    classDef primary fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef secondary fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef infrastructure fill:#fff3e0,stroke:#e65100,stroke-width:2px
    
    class Users,Internet,Server infrastructure
    class Proxy secondary
    class Frontend,Backend primary
````
### Project Requirements 
We require the following for all projects
- Compatible with ARM64 architecture as our server are a fleet of Orange Pi 5s
- Packaged via Docker with an included `docker-compose.yml`. Traditionally, there are two ways to do this; 
    - Provide the source code as-is including your provided .env file. The servers will then build the image/container before being served to the public.
    - Build Docker image of your service and push it to [Dockerhub](https://hub.docker.com/) in a private repository. You can then give us pull access to download the container so that we serve/run it for your intended use to the public

If you're using a single page application (SPA) framework such as React or Vue, you may opt to skip Docker containerization altogether. We can serve the compiled build as a static site directly. If you're instead using NextJS or a server-side rendered framework, please opt to use Docker in packing up your service instead.