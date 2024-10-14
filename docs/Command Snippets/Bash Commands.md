- Mount a CIFS/Samba File share in Linux
```bash
sudo mount -t cifs //$ADDRESS/$REMOTE_PATH /$LOCAL_PATH \
    -o username=$USERNAME,password=$PASSWORD
```
- Mount a CIFS/Samba File Share in Linux with a credentials file
```bash
sudo mount -t cifs //$ADDRESS/$REMOTE_PATH /$LOCAL_PATH \
    -o credentials=/root/.samba/credentials
```
`credentials`file
```
username=value
password=value
```
- Restore most recent Borg backup snapshot
```bash
borg extract --strip-components 3 /mnt/backups/$DEVICE/$BACKUP_NAME::$SNAPSHOT_NAME

# Extract latest snapshot
borg extract --strip-components 3 /mnt/backups/$DEVICE/$BACKUP_NAME::$(borg list /mnt/backups/$BACKUP_NAME --last 1 --short)
```
