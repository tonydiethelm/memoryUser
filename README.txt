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


Problem, the V8 engine gets MAD when doing 1Gb or larger. 
#
# Fatal error in , line 0
# Fatal JavaScript invalid size error 169220804
#
#
#
#FailureMessage Object: 0x7ffc5596ca40
 1: 0xbd6791  [node]
 2: 0x1df8664 V8_Fatal(char const*, ...) [node]
 3: 0xeea968  [node]
 4: 0x10988b2  [node]
 5: 0x1098b72  [node]
 6: 0x12a76fb v8::internal::Runtime_GrowArrayElements(int, unsigned long*, v8::internal::Isolate*) [node]
 7: 0x16e8fb9  [node]
Trace/breakpoint trap (core dumped)

I think that's mad at the size of the array? 

Though, according to an Oreilly book on Javascript, the max number of elements in an array is...4,294,967,295 elements. I'm nowhere near that number. 

I'm going to do the 500Mb versions, several times. It works, I have other things to do. 
I don't want them garbage collected immediately after eating the memory, so I'm going to put them in variables and reference them later with console logs. 
