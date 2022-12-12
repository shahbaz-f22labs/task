let shoppingItems = [
  {
    name: "socks",
    price: 12
  },
  {
    name: "mobile",
    price: 20000
  },
  {
    name: "socks",
    price: 20
  },
  {
    name: "mobile",
    price: 18000
  }
];

// pluck("price")
// Total
// Discount(10)
// tax(18.5)
// deliverTo(TN, country)

const  pluck = ( name) => ( shoppingItems ) => shoppingItems.map((ele)=>ele[name])


function findTotal ( array ) {
let sum = 0
array.map((ele)=>sum += ele)
console.log(`Total Price is ${sum}`)
return sum 
}

const discount = ( rate ) => (amount) => {
  console.log(`You got discount of ${amount*(rate)/100} rupees`)
  return amount*(100-rate)/100
}

const findTax = ( rate ) => (amount) => {
  console.log(`Tax price is ${Math.floor(amount*(rate)/100)} rupees`)
  return Math.floor(amount*(100+rate)/100)
}

const delivery = ( Country,city ) => ( amount ) => (`Order of ${amount} rs will be placed in ${city}, ${Country}`)

let pipe = ( ...fns ) => (x) => fns.reduce((v,f)=>f(v),x)

console.log(pipe(pluck('price'),findTotal,discount(25),findTax(5),delivery("India","Chennai"))(shoppingItems))


// C:\f22\Auth\assignment\currying.js