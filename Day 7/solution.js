// Ques 1
var student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);

//Ques 2
var student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

console.log("Object student before deleting rollno ", student);
delete student.rollno;
console.log("Object student after deleting rollno ", student);

//Ques 3
var student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
}; 
console.log("Length of student object : ",Object.keys(student).length);

// Ques 4
var library = [ 
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true 
   }, 
   
   {
    author: 'Steve Jobs', 
    title: 'Walter Isaacson', 
    readingStatus: true 
   }, 
   
   { 
   author: 'Suzanne Collins', 
   title: 'Mockingjay: The Final Book of The Hunger Games', 
   readingStatus: false 
   }
]; 

library.forEach((item)=> {
 console.log(item.author, item.title , item.readingStatus);
});

//Ques 5
const cylinder = {
 radius: 23.2,
 height: 34.5,
 volume: function () {
   var x = 3.14 * this.radius * this.radius * this.height;
   console.log(x.toFixed(4)) ;
 },
};
cylinder.volume()

// Ques 6
var library = [ 
   {
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
   },
   
   { 
       title: 'Walter Isaacson', 
       author: 'Steve Jobs', 
       libraryID: 4264 
   },
   { 
       title: 'Mockingjay: The Final Book of The Hunger Games', 
       author: 'Suzanne Collins', 
       libraryID: 3245 
   }
];

library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
for(let item in library){
 console.log(library[item].title+" "+library[item].author+" "+library[item].libraryID);
}