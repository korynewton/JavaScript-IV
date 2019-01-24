
//Person class
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender; 
    }
    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}.`) 
    }
}

//Test Person 1:
// const person1test = new Person ({
//     name:'John',
//     age: 93,
//     location: 'Australia',
//     gender: 'male'
// })
// console.log(person1test.name, person1test.age, person1test.location, person1test.gender)
// console.log(person1test.speak())

// //Test Person 2:
// const person2test = new Person ({
//     name:'Ellen',
//     age: 54,
//     location: 'California',
//     gender: 'female'
// })
// console.log(person2test.name, person2test.age, person2test.location, person2test.gender)
// console.log(person2test.speak())


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
    changeGrade(student) {
        let random = Math.floor((Math.random() * 10) + 1);
        random *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
        student.grade += random;
    }
}


// Test instructor:
const instructorTest = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

// const testObj = {
//     name: "<studentName>",
// }

// console.log(instructorTest.catchPhrase, instructorTest.name)
// console.log(instructorTest.speak())
// instructorTest.grade(testObj, 'basket weaving')
// instructorTest.demo('javascript')

//Student Class:
class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
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
    graduate() {
        while (this.grade <= 70) {
            console.log(`Sorry, ${this.name}, Your grade is currently ${this.grade}. Re-grading your work...`) 
            this.grade += 10;
        }
        return (`Congrats ${this.name}! You can graduate from Lambda School with a grade of ${this.grade}`)

        // if (this.grade > 70) {
        //     return `${this.name} has graduated from Lambda School`
        // }
    }
}

//Testing Student class:
// const testStudent = new Student({
//     name:'Jane',
//     age: 25,
//     location: 'New York',
//     gender: 'female',
//     favSubjects: ['HTML', 'CSS', 'JavaScript'],
//     previousBackground: 'artist',
//     className: 'FSW17',
//     grade: 84
// })



// console.log(testStudent.className, testStudent.previousBackground)
// testStudent.listSubjects()
// testStudent.PRAssignment('algebra')
// testStudent.sprintChallenge('algebra')
// testStudent.speak()


//ProjectManager class
class ProjectManager extends Instructor {
    constructor(projectManagerAttrs) {
        super(projectManagerAttrs);
        this.gradClassName = projectManagerAttrs.gradClassName;
        this.favInstructor = projectManagerAttrs.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


//Testing PM class:
const PMTest = new ProjectManager({
    name: 'Billy Bob',
    gradClassName: 'FSW83259',
    favInstructor: 'Josh'
});

// PMTest.standUp('PM group')
// PMTest.debugsCode(testStudent, 'Python')
// PMTest.demo('HTML')
// console.log(PMTest.gradClassName, PMTest.favInstructor)



//Stretch Grade Change
const stretchStudent = new Student({
    name:'Student Joe',
    age: 25,
    location: 'New York',
    gender: 'male',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    previousBackground: 'carpentry',
    className: 'FSW17',
    grade: 60
})

const stretchInstructor = new Instructor({
    name: 'Instructor Jill',
    location: 'San Francisco',
    age: 37,
    gender: 'female',
    favLanguage: 'Ruby',
    specialty: 'back-end',
})

//Stretch Grade Change

console.log(stretchStudent.grade)
stretchInstructor.changeGrade(stretchStudent)
console.log(stretchStudent.grade)


//Graduate check:
// console.log(stretchStudent.graduate())
console.log(stretchStudent.grade)
console.log(stretchStudent.graduate())


