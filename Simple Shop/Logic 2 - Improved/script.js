// Sample user data
let customerName = "Arnorld";
let password = "1234";
let securityCode = "A41BO8";

// Function to display the customer's name in the input placeholder
function showName() {
    document.querySelectorAll("input")[0].placeholder = customerName;
}

// Function to display the customer's password in the input placeholder
function showPassword() {
    document.querySelectorAll("input")[1].placeholder = password;
}

// Function to handle form submission
function submit() {
    let inputName = document.querySelectorAll("input")[0].value;
    let inputPassword = document.querySelectorAll("input")[1].value;
    let inputSecurityCode = document.querySelectorAll("input")[2].value;
    
    if (customerName === inputName) {
        if (password === inputPassword) {
            if (securityCode === inputSecurityCode) {
                // Hide introduction and show selecting page
                document.getElementById("introduction").style.display = "none";
                document.getElementById("selecting_page").style.display = "block";
                document.getElementById("Cname").innerHTML = customerName;
            } else {
                document.getElementById("notice").innerHTML = "Wrong security code";
            }
        } else {
            document.getElementById("notice").innerHTML = "Wrong password";
        }
    } else {
        document.getElementById("notice").innerHTML = "Wrong name";
    }
}

// Product data
let chips = {name: "chips", price: 5};
let sooda = {name: "sooda", price: 7};
let chocolate = {name: "chocolate", price: 3};
let lolipop = {name: "lolipop", price: 1};
let basket = [];

// Function to handle product selection
function select(product) {
    if (!basket.includes(product)) {
        document.getElementById(product.name).innerHTML = "Selected";
        basket.push(product);
        document.getElementById("n_products").innerHTML = basket.length;
        
        let basketProductsPrice = basket.map(el => el.price);
        let total_cost = basketProductsPrice.reduce((prev, curr) => prev + curr, 0);
        document.querySelector("span").innerHTML = total_cost;
        
        document.getElementById("selected-product").innerHTML += (product.name + " | ");
        document.getElementById(product.name).setAttribute("id", "none");
    }
}

// Variable to hold the amount of cash
let cash = 0;

// Function to handle the "I choosed" button click
function choosed() {
    for (let i = 1; i <= 4; i++) {
        document.querySelectorAll("button")[i].setAttribute("onclick", "none()");
    }
    document.getElementById("selecting_page").style.display = "none";
    document.getElementById("payment").style.display = "block";
    document.getElementById("final-cost").innerHTML = "Cost: " + document.querySelector("span").innerHTML + "$";
    let rand = Math.random();
    cash = Math.floor((rand * 16) + 1);
    document.getElementById("customerCash").innerHTML = "Cash: " + cash + "$";
    for (let i = 0; i < basket.length; i++) {
        document.getElementById(i + 1).innerHTML = basket[i].name;
    }
}

// Function to handle product removal
function unselect(place) {
    let product = basket[place - 1];
    document.getElementById(place).setAttribute("style", "color: red;");
    if (basket.includes(product)) {
        let newCost = Math.floor(document.querySelector("span").innerHTML) - product.price;
        document.getElementById("final-cost").innerHTML = "Cost: " + newCost + "$";
        document.querySelector("span").innerHTML = newCost;
        basket = basket.filter(item => item !== product);
    }
    console.log(basket);
}

// Function to handle the payment process
function purchase() {
    if (cash >= Math.floor(document.querySelector("span").innerHTML)) {
        document.getElementById("payment").style.display = "none";
        document.getElementById("finish-page").style.display = "block";
    } else {
        document.getElementById("removeProduct").style.display = "block";
    }
}
