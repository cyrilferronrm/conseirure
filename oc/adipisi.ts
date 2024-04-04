class Individual {
  name: string;
  age: number;
  experience: number;
  title: string;

  constructor(name: string, age: number, experience: number, title: string) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.title = title;
  }

  // Method to introduce the individual
  introduce(): string {
    return `Hello, my name is ${this.name}. I am a ${this.title} with ${this.experience} years of experience.`;
  }
}

// Creating an instance of Individual
const Riyad = new Individual("Riyad", 22, 2, "St Engineer");

// Riyad introduces himself
console.log(Riyad.introduce());
