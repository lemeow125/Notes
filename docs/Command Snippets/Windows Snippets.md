- Get IP addresses of Hyper-V VMs
```powershell
get-vm | ?{$_.State -eq "Running"} | select -ExpandProperty networkadapters | select vmname, macaddress, switchname, ipaddresses | ft -wrap -autosize
```
- Enable traffic forwarding from WSL to Hyper-V `vEthernet (WSL) -> vEthernet (Default Switch)`
```powershell
Get-NetIPInterface | where {$_.InterfaceAlias -eq 'vEthernet (WSL)' -or $_.InterfaceAlias -eq 'vEthernet (Default Switch)'} | Set-NetIPInterface -Forwarding Enabled
```
