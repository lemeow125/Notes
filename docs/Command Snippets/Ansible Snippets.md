WSL Fix for world-writable directories
```bash
export ANSIBLE_CONFIG=./ansible.cfg
```
Ping
```bash
ansible all -m ping
```
Gather facts
```bash
ansible all -m gather_facts

# Limit to one device
ansible all -m gather_facts --limit ADDRESS
```