const P1 = {
    fname:"Safdar",
    lname:"Shan",
    getFullName(){
        console.log(`${this.fname} ${this.lname}`);
    },
};
// P1.getFullName() // call the P1's Method ( P1 k method ko call ki )
// console.log(P1)
const P2 ={
    fname:"Rafaqat",
    lname:"Liaqat",
    // getFullName(){
    //     console.log(`${this.fname} ${this.lname}`);
    // },
    __proto__:P1
};
// P2.getFullName() 
// call the P2's Method ( P2 k method ko call ki )
// console.log(P2)
const P3 ={
    fname:"Asad",
    lname:"Shan",
    // getFullName(){
    //     console.log(`${this.fname} ${this.lname}`);
    // },
    __proto__:P2
};
P3.getFullName() 
// call the P3's Method ( P3 k method ko call ki )
// console.log(P3)
