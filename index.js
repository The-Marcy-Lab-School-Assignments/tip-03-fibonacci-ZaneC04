// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
    let a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

console.log("example one");
printFibonacci(5);  // should print 0, 1, 1, 2, 3
console.log("example two")
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
