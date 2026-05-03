type Student = {
  id: number;
  name: string;
  age: number;
};

// arrow function

const addStudentCourse = <T extends Student>(student: T) => {
  return {
    ...student,
    course: "Cybersecurity",
  };
};

//create objects

const student1 = {
  id: 1,
  name: "Joy",
  age: 22,
};

const student2 = {
  id: 2,
  name: "Rahim",
  age: 21,
  department: "CSE", // extra property
};

const student3 = {
  id: 3,
  name: "Karim",
  age: 23,
  isActive: true, // extra property
};
console.log(student1);
