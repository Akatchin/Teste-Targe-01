
function ReverseString(text) {
    let string = ''
 
    
    for (let i = text.length - 1; i >= 0; i--) { 
        string += text[i]
    }

        return console.log(string)
 }



ReverseString("Alegria")

function GenerateFibonacci(number){
    let num = number
    let value = number+1
    let count = [];
    count[0] = 0;
    count[1] = 1;
    
    for (i = 2; i < value; i++) {
      count[i] = count[i - 2] + count[i - 1];
      
    }

    if (count.includes(number)){
        console.log("O valor está contido na sequência de Fibonacci")
      }
      else {
        console.log("O valor não está contido na sequência de Fibonacci")
      }

    return count
}
 
 let f = GenerateFibonacci(5)

 console.log(f)


