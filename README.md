This app burns memory. 

It runs on port 3002. Send a post to [address]/ with an amount of memory in Mb. IE: POST to /300 and it should use up 300Mb of memory. 

This was built to test alerts on containerized systems. 

For example, if memory was limited to 500Mb in a Kubernetes pod, putting this in the pod and sending a POST to [address]:3002/600 should force an OOMKill. 

It will need to be containerized per your standard process and deployed. 

Or, you can pull from my Google Container Registery at gcr.io/my-kubernetes-project-365523/memoryuser:latest

-Tony Diethelm [Github](https://github.com/tonydiethelm) [LinkedIn](https://www.linkedin.com/in/tonydiethelm/)