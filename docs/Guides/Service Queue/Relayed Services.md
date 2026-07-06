### Overview
You can also opt to use your own servers/devices for hosting with the Service Queue project. Traffic can be relayed through a provided Wireguard VPN to direct subdomain or port traffic to your server

````mermaid
flowchart TD;

    Users("👥 Users")
    Internet("🌐 Internet")
    Proxy["🔄 Reverse Proxy<br/>🚀 Nginx<br/>"]
    Wireguard["🔐 Wireguard Server"]
    Frontend["🗄️ Docker Container<br/>📱 Frontend App<br/>"]
    Backend["🗄️ Docker Container<br/>🔧 Backend API<br/>"]
    Server("🖥️ Own Device")

    Users --> Internet
    Internet --> Proxy
    Proxy --> Wireguard
    Wireguard -.-> Server

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
The diagram above serves as reference for the infrastructure setup with relayed services

Game servers can be served via the relay by forwarding the required TCP/UDP ports

### Project Requirements
The following requirements are needed for relayed projects
- A PC, laptop, or similar device
  - The device must be compatible with Wireguard VPN
  - The device must run 24/7 (or at least run continuously when required for your services to be usable)
  - The device must be able to run your services. You will need to ensure system requirements are met (CPU, RAM, and storage).
- A stable internet connection (a poor network connection will result in your subdomains being intermittently unavailable)

You may choose to run your services on bare metal through XAMPP or similar tools when relayed. Docker containerization is not required.

### Alternatives

Cloudflare offers a similar service called [Cloudflare Tunnels](https://www.cloudflare.com/products/tunnel/) though this requires you to have a domain that you have purchased. There is however offer a free offering to try at [try.cloudflare.com](https://try.cloudflare.com/). This URL however is ephemeral (not permanent and may change) and is limited to one domain. This may require more work on your end especially for Frontend/Backend API setups as endpoints may change.
