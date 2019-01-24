
//Person class
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender; 
    }
    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}.`
    }
}

//Test Person 1:
const person1test = new Person ({
    name:'John',
    age: 93,
    location: 'Australia',
    gender: 'male'
})
console.log(person1test.name, person1test.age, person1test.location, person1test.gender)
console.log(person1test.speak())

//Test Person 2:
const person2test = new Person ({
    name:'Ellen',
    age: 54,
    location: 'California',
    gender: 'female'
})
console.log(person2test.name, person2test.age, person2test.location, person2test.gender)
console.log(person2test.speak())


//Instructor class
class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs)
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

//Test instructor:
const instructorTest = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

const testObj = {
    name: "test name",
}

console.log(instructorTest.catchPhrase, instructorTest.name)
console.log(instructorTest.speak())
instructorTest.grade(testObj, 'basket weaving')

//Student Class:
class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    
    
}


const testStudent = new Student({
    name:'John',
    age: 93,
    location: 'Australia',
    gender: 'male',
    favSubjects: ['subj1', 'subj2', 'subj3']
})

testStudent.listSubjects()
testStudent.PRAssignment('algebra')
testStudent.sprintChallenge('algebra')

