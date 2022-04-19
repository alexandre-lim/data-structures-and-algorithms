import { sum } from './sum';

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

const user = new Student('Jane', 'M.', 'User');

console.log(sum(3, 3));
console.log(greeter(user));
console.log(user.fullName);
