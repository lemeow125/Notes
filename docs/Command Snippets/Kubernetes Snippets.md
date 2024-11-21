- Get all `pods`
```bash
kubectl get pods
```
- Get all `replicacontrollers`
```bash
kubectl get replicacontrollers
```
- Get all `replicasets`
```bash
kubectl get replicasets
```
- Describe a specific resource (ex. Describe a `deployment` named `myapp-deployment`)
```bash
kubectl describe deployment/myapp-deployment

# This works too
kubectl describe deployment myapp-deployment
```
- Get specific resource information in wide format
```bash
kubectl describe deployment/myapp-deployment -o wide
```
- Create a `deployment`
```bash
kubectl create -f deployment.yml
```
- Update a deployment
```bash
kubectl apply -f deployment.yml
```
- Check rollout/deployment history
```bash
kubectl rollout history deployment/myapp-deployment
```
- Update a deployment, tracking changes (deprecated)
```bash
kubectl apply -f deployment.yml --record
``` 
- Update a deployment using `annotate`(**Note:** Changes to `scale` will not create a new `deployment`. Annotating after this may result in the message for the previous `deployment` being replaced)
```bash
# This assumes you've annotated the previous deployment already
kubectl apply -f deployment.yml

# Annotate the new deployment
kubectl annotate deployment/myapp-deployment kubernetes.io/change-cause="DESCRIBE_CHANGES_HERE"

# You can then view the rollout history
kubectl rollout history deployment/myapp-deployment
```
