// ! LOGIC ASSESMENT

// TODO: Given an integer n, return the largest number that contains exactly n digits

const returnLargestNumbers = (n) => {
    const number = []
    for (let i = 0; i < n.length; i++) {
        number.push("9")
    }
    var largest = +(number.join(''));
    return largest;
}

// TODO: Write a function to check whether an input string is a valid IPv4. 

const ipv4Valid = (str) => {
    if(str.includes(".")){
        const everyNumber = str.split(".")
        const arrayValid = []
        everyNumber.forEach(element => {
            try {
                const elementParsed = parseInt(element)
                arrayValid.push(true)
            } catch (error) {
                console.log(error)
                return error
            }
        });
        if(elementParsed.every(e => e === true)){
            console.log("IP Valid")
        } else {
            console.log("IP Invalid")
        }
    }
}

// TODO: You are given a two-digit integer n . Return the sum of its digits

const sumOfDigits = (int) => {
    const strToSeparate = int.toString()
    const arrayOfStr = strToSeparate.split("")
    const finalSum = arrayOfStr[0] + arrayOfStr[1]
    return finalSum
}

/* TODO: 4. n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child.  
Determine how many pieces of candy will be eaten by all the children together.  
Individual pieces of candy cannot be split.*/

// ! DATABASE ASSESMENT

// ? Describe each class in English. 
// ? Draw the class diagram, including association classes if required. 
// ? Describe each association in English (both directions). 
// ? Draw the relation scheme.

/* TODO: You are designing a database for an automobile repair shop. When a customer brings in  a vehicle, a service advisor will write up a repair order. 
This order will identify the  customer and the vehicle, along with the date of service and the name of the advisor. */
const ReparationOrder = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Client'
    },
    car: {
        year: Number,
        model: String
    },
    adviser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Emloyee'
    }
}, {
    timestamps: true,
    versionKEy: false
})
/* TODO: A vehicle might need several different types of service in a single visit. 
These could  include oil change, lubrication, rotate tires, and so on.   */

const Service = new Schema({
    service: String
})

const Vehicle = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Client'
    },
    model: String,
    year: Number,
    services: [Service]
})


/* TODO: Each type of service is billed at a pre-determined number of hours work, regardless of  the actual time spent by the technician. */

/* TODO: Each type of service also has a flat book rate of dollars-per-hour that is charged.  */ 