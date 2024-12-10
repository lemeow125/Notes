
- [QBittorrent](https://ghcr.io/hotio/qbittorrent)
```bash
docker run \
    --restart=always \
    --name qbittorrent \
    -d \
    -p 8088:8080 \
    -p 57189:57189 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Asia/Manila" \
    -v /mnt/nvme/docker-volume-mounts/vuetorrent:/config \
    -v /mnt:/mnt \
    ghcr.io/hotio/qbittorrent
```
- [Unbound](https://hub.docker.com/r/mvance/unbound) (DNS Resolver)
```bash
docker run \
--name=unbound-rpi \
--publish=5335:53/udp \
--publish=5335:53/tcp \
--restart=always \
--detach=true \
mvance/unbound-rpi:latest
```
- [Uptime Kuma](https://github.com/louislam/uptime-kuma)
```bash
docker run \
	-d \
	--restart=always \
	-p 8082:3001 \
	-v /mnt/sda1/docker-volume-mounts/uptime-kuma:/app/data \
	--name uptime-kuma \
	louislam/uptime-kuma:1
```
- OpenStreetMap
```bash
# Import .pbf file
docker run \
  -v /mnt/sdb1/files/docker\ projects/tileserver/philippines-latest.osm.pbf:/data/region.osm.pbf \
  -v /mnt/sdb1/docker-volume-mounts/osm-data:/data/database/ \
  -v /mnt/sdb1/docker-volume-mounts/osm-tiles:/data/tiles/ \
  overv/openstreetmap-tile-server \
  import

# Run OSM tileserver
docker run \
    -p 8084:80 \
    -e THREADS=4 \
    -e ALLOW_CORS=enabled \
    -v /mnt/sdb1/docker-volume-mounts/osm-data:/data/database/ \
    -v /mnt/sdb1/docker-volume-mounts/osm-tiles:/data/tiles/ \
    -d overv/openstreetmap-tile-server \
    --name osm-tileserver \
    run

# Pre-render Cagayan de Oro City
# Set folder permissions for osm-tiles to 777 otherwise tiles may not be saved
# Run this via tmux or screen as this might take a while
tmux new-session -d -s "Render OSM Tiles" 'docker exec -it osm-tileserver "git clone https://github.com/alx77/render_list_geo.pl && cd render_list_geo.pl && ./render_list_geo.pl -n 4 -z 3 -Z 18 -x 124.33 -X 124.94 -y 8.13 -Y 8.65 -m default"'

```
- [Minetest](https://lscr.io/linuxserver/minetest)
```bash
docker run -d \
  --name=minetest \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Manila \
  -e CLI_ARGS="--gameid minetest --port 30000" `#optional` \
  -p 30000:30000/udp \
  -v /mnt/sda1/docker-volume-mounts/minetest:/config/.minetest \
  --restart always\
  lscr.io/linuxserver/minetest:latest
```
- [Jellyfin](https://github.com/jellyfin/jellyfin) (via [jellyfin-mpp](https://hub.docker.com/r/jjm2473/jellyfin-mpp) fork for Orange Pi 5 support)
```bash
docker run --name jellyfin \
    --privileged \
    --restart=unless-stopped -td \
    `for dev in iep rga dri dma_heap mpp_service mpp-service vpu_service vpu-service \
        hevc_service hevc-service rkvdec rkvenc avsd vepu h265e ; do \
      [ -e "/dev/$dev" ] && echo " --device /dev/$dev"; \
    done` \
    --dns=172.17.0.1 \
    -p 8091:8096 \
    -v /mnt/sda1/docker-volume-mounts/jellyfin/config:/config \
    -v /mnt:/mnt \
    jjm2473/jellyfin-mpp:latest
```
- [Sonarr](https://lscr.io/linuxserver/sonarr)
```bash
docker run -d \
  --name=sonarr \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Manila \
  -p 8092:8989 \
  -v /mnt/sda1/docker-volume-mounts/sonarr:/config \
  -v /mnt:/mnt \
  --restart always \
  lscr.io/linuxserver/sonarr:latest
```
- [Prowlarr](https://lscr.io/linuxserver/prowlarr)
```
docker run -d \
  --name=prowlarr \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Manila \
  -p 8093:9696 \
  -v /mnt/sda1/docker-volume-mounts/prowlarr:/config \
  --restart always \
  lscr.io/linuxserver/prowlarr:latest
```
- [Jackett](https://ghcr.io/hotio/jackett)
```bash
docker run --rm \
    --name jackett \
    -p 8094:9117 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Asia/Manila" \
    -v /mnt/sda1/docker-volume-mounts/jackett:/config \
    ghcr.io/hotio/jackett
```
- [Firefox Container](https://lscr.io/linuxserver/firefox)
```bash
docker run \
	-d \
	--name=firefox \
	--security-opt seccomp=unconfined \
	-e PUID=1000 \
	-e PGID=1000 \
	-e TZ=Asia/Manila \
	-p 3001:3000 \
	-v /mnt/nvme/docker-volume-mounts/firefox-config:/config \
	--shm-size="2gb" \
	--restart always \
	lscr.io/linuxserver/firefox:latest 
```
- [Prometheus](https://hub.docker.com/r/prom/prometheus)
```bash
docker run \
    -p 9090:9090 \
    -v /mnt/nvme/docker-volume-mounts/prometheus:/etc/prometheus \
    --restart unless-stopped \
    prom/prometheus
```
- [Inbucket](https://hub.docker.com/r/inbucket/inbucket/)
```bash
docker run -d --restart=always --name inbucket \
-p 8025:8025 \
-e INBUCKET_MAILBOXNAMING="domain" \
-e INBUCKET_WEB_ADDR="0.0.0.0:8025" \
-e INBUCKET_STORAGE_TYPE="file" \
-e INBUCKET_STORAGE_PARAMS="path:/mnt/sda1/docker-volume-mounts/inbucket" \
-e INBUCKET_STORAGE_RETENTIONPERIOD="4h" \
-e INBUCKET_STORAGE_MAILBOXMSGCAP="5000" \
inbucket/inbucket:latest 
```
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer)
```bash
docker run \
  --name dns-server \
  --hostname dns-server \
  -p 8027:5380/tcp \
  -p 53:53/udp \
  -p 53:53/tcp \
  -e DNS_SERVER_DOMAIN=ns1.domain.com \
  -e DNS_SERVER_ADMIN_PASSWORD_FILE=/mnt/sda1/files/docker\ projects/technitium/password.txt \
  -v /mnt/sda1/files/docker\ projects/technitium/config:/etc/dns \
  --restart unless-stopped \
  --privileged \
  --sysctl net.ipv4.ip_local_port_range="1024 65000" \
  technitium/dns-server:latest
```
- [Open WebUI](https://github.com/open-webui/open-webui)
```bash
docker run -d -p 9001:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```