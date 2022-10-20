I need this to use up a certain amount of memory. 
Current memory allocation for polo is 2gb of memory. 
Let's try to use up memory in 500mb chunks? 

Set up a route for 500Mb, 1000, 1500, 2000, 2500. 

How much memory is a number? 
A number is 8 bytes. 

To get 500Mb, cram in 62.5million numbers.
To get 1Gb, cram in 125million numbers. 
To get 1.5Gb, cram in 187.5million numbers.
To get 2Gb, cram in 250million numbers.
To get 2.5Gb, cram in 312.5million numbers.

I think I can just make a for loop and make a VERY big array, as per 
https://stackoverflow.com/questions/47756885/how-to-use-a-lot-of-memory-in-node-js

I might need to flag node to allow such large memory usage, as per one of the answers above.

const a = []
for (let i = 0; i < numberAbove; i++)
    a.push(i)