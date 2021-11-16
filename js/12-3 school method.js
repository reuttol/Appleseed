const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 1,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 1,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],

    findPerson(type, id){
        const arr = this[type];
        return arr.find(e => e.id === id);
    },
    assignStudent(subject, id){
        const teachers = this.teachers.filter(t => t.subjects.includes(subject));
        for(let teacher of teachers){
            if(teacher.capacityLeft > 0){
                teacher.students.push(this.findPerson("students", id));
                teacher.capacityLeft--;
                return;
            }
        }
        console.log('Sorry, no available teachers left');
    },
    assignTeachersSubject(subject, id){
        const teacher = this.findPerson("teachers", id);
        teacher.subjects.includes(subject) || teacher.subjects.push(subject);
    }
};
//  school.findPerson("teachers", 1);

school.assignTeachersSubject("chemistry", 1);
console.log(school.findPerson("teachers", 1));
school.assignTeachersSubject("JS", 1);
console.log(school.findPerson("teachers", 1));
school.assignStudent("chemistry", 10);
school.assignStudent("chemistry", 11);
school.assignStudent("chemistry", 12);
console.log(school.teachers[0].students);
console.log(school.teachers[1].students);
console.log(school);