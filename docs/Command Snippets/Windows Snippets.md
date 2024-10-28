- Get IP addresses of Hyper-V VMs
```powershell
get-vm | ?{$_.State -eq "Running"} | select -ExpandProperty networkadapters | select vmname, macaddress, switchname, ipaddresses | ft -wrap -autosize
```
- Enable t