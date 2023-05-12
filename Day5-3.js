//Write your code below this line.

for(let element of my_array){
    if(element === element.split('').reverse().join('')) {
        console.log(element)
    }
}