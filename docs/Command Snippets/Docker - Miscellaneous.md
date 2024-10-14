Create CIFS/Samba Volume
```bash
docker volume create \
	--driver local \
	--opt type=cifs \
	--opt device=//uxxxxx.your-server.de/backup \
	--opt username=USERNAME,password=PASSWORD,file_mode=0777,dir_mode=0777 \
	--name VOLUME_NAME
```