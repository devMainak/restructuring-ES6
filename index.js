// restructuring or renaming

//function to rename parameters of an object using restructuring

const printPersonDetails = ({name: perosnName, age: personAge}) => {
  console.log(`Person: ${perosnName}, Age: ${personAge}`)
}

printPersonDetails({name: "Alice", age: 25})

//function to rename properties in an array

const printFruits = ([fruitName, fruitColor]) => {
  console.log(`Fruit ${fruitName} is ${fruitColor} in color`)
}

printFruits(["Apple", "Red"])

// function to print book details using restructurinng

const printBookInfo = ({title: bookTitle, author: {name: authorName, nationality}}) => {
  console.log(`Book: ${bookTitle}, Author: ${authorName}, Nationality: ${nationality}`)  
}

printBookInfo({title: "Eloquent JavaScript", author: { name: "Marijn Haverbeke", nationality: "German"}})

const displayPerson = ({name: personName = "Tyler", age: personAge = 28}) => {
  console.log(`Person Name: ${personName}, Person Age: ${personAge}`)
}
displayPerson({})
