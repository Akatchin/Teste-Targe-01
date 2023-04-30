function GenerateFibonacci(number){
    let value = number+1
    let count = [];
    count[0] = 0;
    count[1] = 1;
    
    for (i = 2; i < value; i++) {
      count[i] = count[i - 2] + count[i - 1];
      
    }

    count.includes(number)?
        console.log("O valor está contido na sequência de Fibonacci"):
        console.log("O valor não está contido na sequência de Fibonacci")

    return count
}
 
 let f = GenerateFibonacci(7)

 console.log(f)
