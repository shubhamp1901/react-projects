type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: 'ordered' | 'completed'
}

// let myName = "bob";
// TypeScript infers: string
// → Can be reassigned to any other string.

// const myName2 = "bob";
// TypeScript infers: "bob" (string literal type)
// → Cannot be changed to another string.

// Union type: If we want our variable to be strictly one of the few strings
type userRole = 'admin' | 'guest' | 'member'

let userRole: userRole = 'admin'

let myName = "bob"
const myName2 = "bob"

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

// that means it won't return anything it's just performing an operation outside of itself
function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.filter(pizzaObj => pizzaObj.name === pizzaName)
    if (selectedPizza.length < 1) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza[0].price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza[0], status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId): Order[] | undefined {
    const order = orderQueue.filter(order => order.id === orderId)
    if (order.length < 1) {
        console.error(`${orderId} was not found in the orderQueue`)
        // throw new Error()
        return
    }
    order[0].status = "completed"
    return order
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


// Function user types: Return value must User object not string or numnber if we try to return user.username it'd throw error as it's not User
// Object
type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

// adding any type means turning off TS.
let value: any = 1
value = "abc"