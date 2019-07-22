//1. ARRAYS
// Create an Array, a, of 10 numbers from 0 to 9.
let arr = [0,1,2,3,4,5,6,7,8,9]

// Print the 5th element in the array
console.log(`The 5th element in the array : ${arr[5]}`)

// Insert numbers 10 to 20 in array 
for(let i=10;i<=20;i++){
    arr.push(i)
}

// Remove the last element of the array.
arr.pop()

// Remove the first element of the array.
arr.shift()

// Add an element at the beginning of the array
arr.unshift(-1)

// Find the index of number 17 in the array.
let i = arr.indexOf(17)

// Remove the item at index 11 from the array.
let item = arr.splice(11, 1)
console.log(arr)

// Remove 5 items starting from index 4.
let items = arr.splice(4,5)
console.log(arr)

// Create a new array, b, having a multiplication of number and its index from array arr
let b = arr.map((value,index)=>{
    return value*index
})
console.log(b)

// Extract numbers at index 7, 8, 9,10 from array arr
let n = arr.filter((value,index)=>{
    return( index >= 7 && index <= 10)
})
console.log(n)

// Create an array, c, from array b, of numbers which are greater than 30.
let c = b.filter((value,index)=>{
    return(value>30)
})
console.log(c)

//2.OBJECTS
// Create an object representing your favorite GoT or any other character from a movie or TV series. 
//(first name, last name, yearsOfExperience, noOfMovies., latestMovie, noOfAwards. The more you add the better)
let obj = {
    firstName : "Hugh",
    lastName : "Jackman",
    DOB : "12 Oct 1968",
    Occupation : ['Actor','Singer','Producer'],
    yearsOfExperience : "24",
    noOfMovies : "40",
    latestMovie : "The Front Runner",
    noOfAwards : "22"
}

// Add a function, getFullName, which returns the full name of the character
function getFullName(){
    return `${obj.firstName} ${obj.lastName}`
}
console.log(getFullName())

// Add a function, getBio, which returns a short bio of the character using the properties defined above.
function getBio(){
    return `Name : ${getFullName()} \nDOB : ${obj.DOB} \nOccupation : ${obj.Occupation.toString()} \nYears of Experience : ${obj.yearsOfExperience}`
}
console.log(getBio())

// Add other functions which return the rest properties defined in the object.
function getFullBio(){
    shortBio = getBio()
    return `${shortBio} \nNo. of Movies : ${obj.noOfMovies} \nLatest Movies : ${obj.latestMovie} \nNo. of Awards : ${obj.noOfAwards}`
}
console.log(getFullBio())

// Print the first name of the character.
console.log(obj.firstName)

// Extract noOfMovies, yearsOfExperience from the object.
console.log(`No. of Movies : ${obj.noOfMovies} \nYears of Experience : ${obj.yearsOfExperience}`)

// Create another object with a different character and merge the two objects.

let newobj = {
    firstName : "Emma",
    lastName : "Watson",
    DOB : "15 April 1990",
    Occupation : ['Actress','Model','Activist'],
    yearsOfExperience : "19",
    noOfMovies : "19",
    latestMovie : "Little Women",
    noOfAwards : "20"
}

let mergeObjArray = [obj,newobj]
let mergeObj = {
    firstObj : obj,
    secondObj : newobj
}
console.log(mergeObj)

//3.CLASSES
//Create a new class defining a character using the same info that you used to create the above object. 
//The class should be generic to define any character details.

class Character{
    constructor(para){
        this.firstName = para.firstName
        this.lastName = para.lastName
        this.DOB = para.DOB
        this.Occupation = para.Occupation
        this.yearsOfExperience = para.yearsOfExperience
        this.noOfMovies = para.noOfMovies
        this.latestMovie = para.latestMovie
        this.noOfAwards = para.noOfAwards
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getBio(){
        return `Name : ${this.getFullName()} \nDOB : ${this.DOB} \nOccupation : ${this.Occupation.toString()} \nYears of Experience : ${this.yearsOfExperience}`
    }
    getFullBio(){
        shortBio = this.getBio()
        return `${shortBio} \nNo. of Movies : ${this.noOfMovies} \nLatest Movies : ${this.latestMovie} \nNo. of Awards : ${this.noOfAwards}`
    }
}

const c1 = new Character(obj)
console.log(c1.getFullBio())
const c2 = new Character(newobj)
console.log(c2.getFullBio())

//4.INHERITENCE
//Create an Animal class defining basic properties and functions of animals. 
//Create a new class which extends Animal class with specific properties of that animal. 
//You can consider any animal of your choice. (Eg. Cat, Dog, Lion, Mouse, etc.)

class Animal{
    constructor(){
        this.noOfLegs = 4
    }
    walk(){
        console.log("Animals can walk")
        //walking mechanism
    }
}

class Dog extends Animal{
    constructor(){
        super()
        this.sound = "bark"
        this.nature = ['playful','friendly','loyal']
    }
    getInfo(){
        console.log(`No. of Legs : ${this.noOfLegs}`)
        this.walk()
        console.log(`Sound : ${this.sound} \nNature : ${this.nature}`)
    }
}

let d = new Dog()
d.getInfo()

//Print React is the best after 5 seconds.
console.log("Will print in 5 sec")
setTimeout(function(){console.log("React is the best")},5000)

//Print React is the best after 3 seconds continuously.
setInterval(function(){console.log("React is the best")},3000)

//Print React is the best 10 times and stop (using setInterval and loops, both)
let j = 0
let interval = setInterval(function(){
    j+=1
    console.log(`${j}.React is the best`)
    if(j==10){
        clearInterval(interval)
    }
},1000)