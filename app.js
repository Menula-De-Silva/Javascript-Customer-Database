// let x = 10;
// let y = 20;
// let name = "Saman";
// let isAdd = true;

// let customerList = [];
// let customer = {};

// let salary = 4500.00;


// console.log(typeof x);
// console.log(typeof name);
// console.log(typeof isAdd);
// console.log(typeof customerList);
// console.log(typeof customer);
// console.log(typeof salary);


// {
//     var name = "Saman";
//     let age =12;

// }

// console.log();

// console.log(name);

// const nameList =[""];

// nameList ="";


// for(let i = 0;i<10;i++){
//     console.log("Hello");
// }

// let numberList =[10,20,30,40,50,60,70,80,90,100];

// for(let number of numberList){
//     console.log(number); 
// }

// numberList.forEach(number => {
//     console.log(number);
// });


let isAdd = false;

// if(isAdd){
//     console.log('Customer Added!');
// }else{
//     console.log('Customer Not Added!');
// }

// let roomNumber =1;


// switch(roomNumber){
//     case 1 : console.log("This is romm number 01");
//     break;
//     case 2 : console.log("This is romm number 02");
//     break;
//     case 9 : console.log("This is romm number 09");
//     break;
//     case 7 : console.log("This is romm number 07");
//     break;
//     case 10 : console.log("This is romm number 10");
//     break;
// }


// let isTrue = 10 === "10";

// console.log(isTrue);

// let sum = getSum(10,20);
// console.log(sum);

// function getSum(x,y){
//     return x+y;
//  }


// class Example{
//     public static void main(String [] args){

//     }
// }

// let customer = {}

// console.log(customer);


// class Customer{
//  name;
//  age;
//  address;
//  salary;

//  constructor(name,age,address,salary){
//     this.name=name;
//     this.age=age;
//     this.address=address;
//     this.salary=salary
//  }

//  getName(){}
//  setName(){}

// }



// let customer = new Customer("saman",12,"panadura",75000.00);


let customer = {
    name: "saman",
    age: 12,
    address: "panadura",
    salary: 7500.00
}


const customerList = [
    {
        name: "saman",
        age: 12,
        address: "panadura",
        salary: 7500.00
    },
    {
        name: "kamal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "nimal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "sunil",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "vimal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "ranil",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "sunimal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "sirimal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "somapala",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }
]


loadList();

function loadList() {
    let ol = document.getElementById("ol");

    let body = "";

    customerList.forEach(customer => {
        body += `<li>${customer.name}</li>`
    });
    ol.innerHTML = body;
}



function addCustomer() {

    alert("bala ba")

    let txtName = document.getElementById("txtName");
    let customerName = txtName.value;

    customerList.push({
        name: customerName
    });

    loadList();

    console.log(customerName);

}



// let h1= document.getElementById("h1");
// h1.textContent="Vimal"
// console.log(h1);

// h1.textContent=customerList[0].name;


// document.write(customerList[0].address)
// document.write(customerList[0].name)
// document.write(customerList[0].age)




// console.log(customerList);



// console.log(customer.salary);