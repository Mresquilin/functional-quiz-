let properties = [
    {Item: 123456, name: "twix", price: 1.99, description: "justRight"},
   {Item:  234567, name: "kernel", price: 8.99, description: "Corn that pops"},
    {Item: 345678, name: "Coke", price: 2.99, description: "Carbonated Drink"},
    {Item:  456789, name: "Mobil", price: 6.99, description: "Motor Oil"},
    {Item: 5678910, name: "7-11", price: 3.99, description: "Ice Drink"}
]


class NewProducts{
    constructor(properties){
    this.properties = properties
    this.afterAddingProperties = this.getNames(this.properties)
    this.sItems = this.getSaleItems(this.afterAddingProperties) 
    this.oItems = this.orderItems(this.afterAddingProperties)   
    }
    getNames(properties){
        let b = 0;
        return properties.map(function(property){
            return b = properties.name
            return b.sort()

        })
    }
    getSaleItems(properties){
        return properties.filter(function(items){
            return properties.price < 6
        })
    }
    orderItems(properties){
            let count = 0
            let stopper = properties.length
            let eachPrice = properties.name + properties.price
            let mult35 = properties.price * 35
            //let buyAll = (properties.Item1 *35)+(properties.Item2 *35)+(properties.Item3 *35)+(properties.Item4 *35)+(properties.Item5 *35)
            return properties.reduce(function(acc, cur){
                count++
                return (count === stopper) ? (acc + cur)/stopper : (acc + cur)
                return (acc + cur)/count
                return eachPrice
                return mult35
            }, 0)
    }
}

let final = new NewProducts(properties)

//console.log(b)
console.log(final.getNames)

