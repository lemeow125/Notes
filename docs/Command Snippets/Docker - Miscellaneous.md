Create CIFS/Samba Volume
```bash
docker volume create \
	--driver local \
	--opt type=cifs \
	--opt device=//uxxxxx.your-server.de/backup \
	--opt o=username=USERNAME,password=PASSWORD \
	--name VOLUME_NAME
```
Native CIFS credentials file is not supported with Docker CIFS volumes