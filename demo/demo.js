const items = [ 
    { name: "Bike", price: 200 },
    {name: "TV", price: 100},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 300},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25}
]

function filterDemo() {
    const filteredItems = items.filter((item) => {
        return item.price < 100; 
    })
    // Doesn't Change Items!
    console.log("Filter Demo: ");
    console.log(filteredItems);
}

filterDemo(); 

function mapDemo() {
    const mappedItems = items.map((item) => {
        return item.name; 
    })

    console.log("Map Demo: ");
    console.log(mappedItems);
}

mapDemo(); 

//Second Parameter in the function and the method!
//Value to add to and starting point
function reduceDemo() {
    const reducedItems = items.reduce((currentTotal, item) => {
        return item.price + currentTotal; 
    }, 0)

    console.log("Total Price of Items: ");
    console.log(reducedItems);
}

reduceDemo(); 

function popDemo() {
    const poppedItem = items.pop();
    console.log("Pop Demo: ");
    console.log(poppedItem);
}

popDemo(); 

function pushDemo() {
    const pushItem = {name: "Desk", price: 200};
    items.push(pushItem);
    console.log("Current List: ")
    console.log(items);
}

pushDemo(); 

