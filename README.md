This app burns memory. 

It runs on port 3002. Send a post to / with an amount of memory in Mb. IE: POST to /300 and it should use up 300Mb of memory. 

This was built to test alerts on containerized systems. 

For example, if memory was limited to 500Mb in a Kubernetes pod, putting this in the pod and sending a POST to X:3002/600 should force an OOMKill. 

