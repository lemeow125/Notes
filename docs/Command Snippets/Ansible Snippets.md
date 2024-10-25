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
Elevate command to root user
```bash
# This will fail without sudo
ansible all -m apt -a update_cache=true

# This will succeed
# Equivalent to sudo apt-update
ansible all -m apt -a update_cache=true --become --ask-become-me-pass
```
Install packages
```bash
ansible all -m apt -a name=vim --become --ask-become-pass
```
Install/Update Packages (multiple arguments)
```
Install packages
```bash
ansible all -m apt -a "name=vim,nginx" --become --ask-become-pass
```