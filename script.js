// Task- 1.A
/*
class Movie {
    constructor (title,studio,rating)
    {    
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    }

 const obj = new Movie ("Leo","7-screen","7.2");

console.log(obj)
*/
// Task 1.B
/*
class Movie {
    constructor (title,studio,rating="PG")
    {    
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    }
 const obj1 = new Movie ("Vikram","RKFI");

console.log(obj1.title,obj1.studio,obj1.rating)
*/

// Task 1.c 
/*
function Movie(title, rating) {
    this.title = title;
    this.rating = rating;
}

function getPG(movies) {
    return movies.filter(movie => movie.rating === 'PG');
}

const movies = [
    new Movie("Iron Man ", "PG"),
    new Movie("Spider Man", "PG-13"),
    new Movie("Super Man", "PG-13"),
    new Movie("Bat Man", "PG")
];

const pgMovies = getPG(movies);
pgMovies.forEach(movie => console.log(movie.title));
*/

//Task 1.D
/*
class Movie {
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj = new Movie("Casino Royale","Eon Productions","PG­13")

console.log (obj)
*/

// Task 2 
/*
class Circle {
    constructor(radius,color)
    {
    this.radius=radius,
    this.color=color
    }
    set Radius(n){
        this.Radius = n;
    }
    get Radius(){
        return this.Radius
    }
    set Color(m){
        this.Color = m
    }
    get Color(){
        return this.Color
    }
    get tostring(){
        return "Circle[radius= this.Radius ,color= this.Color]"
    }
    get area(){
       return Math.PI*Math.pow(this.radius,2)
    }
    get circumference (){
        return 2*Math.PI*this.radius
} 
}
let Circ = new Circle("1.0","Red")
console.log(Circ.radius)
console.log(Circ.color);
console.log(Circ.tostring);
console.log(Circ.area);
console.log(Circ.circumference);

//Task  3 
/*
class Person {
    constructor(Name,Age,Gender,Martialstatus,Contact,Email)
    {
    this.name = Name;
    this.age = Age;
    this.gender = Gender;
    this.martialstatus = Martialstatus;
    this.contact = Contact;
    this.email = Email;
    }
}
const obj = new Person ("Deepak","23","Male","Single",9876543210,"Deepak6575@gmail.com")

console.log(obj)
*/
// Task 4 
//write a class to calculate the Uber price.
/*
class UberPrice {
    constructor(baseFare, costPerMinute, costPerKilometer) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerKilometer = costPerKilometer;
    }

    calculatePrice(minutes, kilometers) {
        const timeCharge = minutes * this.costPerMinute;
        const distanceCharge = kilometers * this.costPerKilometer;
        const totalFare = this.baseFare + timeCharge + distanceCharge;
        return totalFare;
    }
}
const uber = new UberPrice(20.00, 10, 8); 
const price = uber.calculatePrice(15, 5);
console.log(`The total Uber fare is: $${price}`);
*/