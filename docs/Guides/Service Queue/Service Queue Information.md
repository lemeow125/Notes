### Overview
APIs, apps, and game servers within the service queue are run directly on my own home lab. A brief overview is provided below.

````mermaid
graph TB
    %% Styling
    classDef serverStyle fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef serviceStyle fill:#f3e5f5,stroke:#4a148c,stroke-width:1px
    classDef backupStyle fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    classDef ciStyle fill:#fff3e0,stroke:#e65100,stroke-width:2px
    
    %% Servers
    subgraph "🖥️ Servers Cluster"
        S1["🎮 Gaming Server\n(Debian + Docker)"]
        S2["🌐 App Server\n(Debian + Docker)"]
        S3["⚙️ Utility Server\n(Debian + Docker)"]
    end
    
    CI["🚀 CI/CD Server\n(Woodpecker CI)"]
    
    subgraph "💾 Backup Cluster - Borg Group"
        B1["📀 Backup Location 1\n(Borg Repository)"]
        B2["📀 Backup Server 2\n(Borg Repository)"]
    end
    
    %% Game Services
    subgraph S1
        S1A["🎯 Game Server 1\nMinecraft - Vanilla"]
        S1B["🎯 Game Server 2\nMinecraft - Modded"]
        S1C["🎯 Game Server 3\nCS2"]
    end
    
    %% App Services
    subgraph S2
        S2A["📱 Frontend App\nReact/Vue"]
        S2B["🔧 Backend API\nNode.js/Python"]
        S2C["🗄️ Database\nPostgreSQL"]
    end
    
    %% Utility Services
    subgraph S3
        S3A["🔍 Monitoring\nUptime Kuma"]
        S3B["🔐 VPN\nWireGuard"]
        S3C["📁 File Sharing\nNextcloud"]
        S3D["🖥 PGAdmin"]
    end
    
    %% CI/CD Server
    subgraph CI
        CIA["📦 Build Stage"]
        CIB["🧪 Test Stage"]
        CIC["🚢 Deploy Stage"]
        CID["📋 Woodpecker CI"]
    end
    
    %% Backup Relationships
    S1 -.->|Borg Backup| B1
    S2 -.->|Borg Backup| B1
    S3 -.->|Borg Backup| B1
    
    S1 -.->|Borg Backup| B2
    S2 -.->|Borg Backup| B2
    S3 -.->|Borg Backup| B2
    
    %% CI/CD Relationships
    CI -->|Triggers Builds| S2
    CI -->|Deploys Updates| S1
    CI -->|Manages Services| S3
    
    %% Internal Dependencies
    S2A -->|API Calls| S2B
    S2B -->|Database| S2C
    S3A -->|Monitors| S1
    S3A -->|Monitors| S2
    S3A -->|Monitors| S3
    
    %% Apply Styling
    class S1,S2,S3 serverStyle
    class S1A,S1B,S1C,S2A,S2B,S2C,S3A,S3B,S3C,S3D serviceStyle
    class B1,B2 backupStyle
    class CI,CIA,CIB,CIC,CID ciStyle

    %% Legend
    subgraph Legend["📊 Legend"]
        L1["🖥️ Server Node"]
        L2["📦 Service Container"]
        L3["💾 Backup Target"]
        L4["⚡ CI/CD Process"]
    end
````

### Resource Limits
There are **no** hard resource limits when availing of services via the service queue. Hosting is catered to on a first-come-first-serve basis.

Resources in each server however are shared amongst other services, based on the server node you are assigned to. Internet traffic is shared amongst all servers, with speeds of up to 80mbps. There is **no** ingress/egress limit.

In general, each server will have the following minimum specs
- 8-core processor
- 64GB DDR4
- 1TB NVME storage


### Ingress/Egress
Internet traffic is shared amongst all servers across 4 ISPs, with speeds of up to 80mbps for each ISP connection. There is **no** ingress/egress limit.

Traffic is usually pinned on the first ISP for lower traffic services. If you have specific bandwidth or requirements, please have this outlined in your request.



#### Backups/Continuity
Hosted services are backed up using [Borg](https://www.borgbackup.org/)
- Two **local** backup locations
- Backup snapshots taken every 8 hours

Server nodes are also backed by a [UPS-capable power station](https://www.bluettipower.com/products/bluetti-eb3a-portable-power-station), allowing for continued runtime for up to an hour during blackouts.

Servers are unaffected by blackouts occurring between 8 AM to 3 PM thanks to PV systems.


#### CI/CD Pipelines
For frontend and backend applications [hosted locally](Hosted%20Services.md), automated deployments are possible via [Woodpecker](https://github.com/woodpecker-ci/woodpecker). This is preferred over GitHub Actions or similar platforms.

Sample `.yml` files are provided in this [repository](https://github.com/lemeow125/Service_Queue)for starters.