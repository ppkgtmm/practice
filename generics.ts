// make reusable for every type
interface GenericIdentity {
    <T>(arg: T): T;
}

function identityFunc<T>(arg: T): T {
    return arg;
}

const identity: GenericIdentity = identityFunc;
// const numIdentity: GenericIdentity<number> = identityFunc; // error not generic

console.log(identity('some str'))
// if no value initialized for filed with type checkind, ts throw error
class School {
    name: string = 'ASSC'
}
  
class Company {
    isGlobal: boolean = false
}
  
class Person {
    name: string = 'Tata Kim'
}
  
class Student extends Person {
    school: School = new School() 
}
  
class Employee extends Person {
    company: Company = new Company()
}
  
function createInstance<P extends Person>(c: new () => P): P{
    return new c();
}
let student: Student = createInstance(Student);
let employee: Employee = createInstance(Employee);
console.log(student.name, student.school.name);
console.log(employee.company.isGlobal);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
  
let x = { a: 1, b: 2, c: 3, d: 4 };
  
getProperty(x, "a");
// getProperty(x, "m"); // error no key m in obj x