const sharePizza = (pizzaSlices, numPeople) => {
    return `Each person gets ${Math.ceil((pizzaSlices/numPeople) * 100) / 100} slices of pizza; from our ${pizzaSlices} slice pizza`
}

console.log(sharePizza(10, 3)); 