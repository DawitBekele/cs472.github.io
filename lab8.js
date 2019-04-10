//q1 a filter function that returns a string whose banned words are filter out
var str="WAP is not very interesting";
let arr=[6,4,0,3,-1,1];
var filterFunciton=function(){
     let str1=str.split(" ").filter(s=>s!=="not").join(" ");
     console.log("given string:"+str);
     console.log("output is:"+ str1);
 }
 //Q2 bubble sort
var sort= function(arr){
    let n = arr.length;
    let sorted=false;
    for (let i = 0; i < n - 1&&sorted===false; i++){
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap temp and arr[i]
                let temp = arr[j];
                arr[j] = arr[j+ 1];
                arr[j+ 1] = temp;
            }
        }
    }
}
//Q3
function Person(fname){
    this.name=fname;
    this.teach=function(subject){
        console.log(this.name+ "+is teaching "+subject);
    }
}
const teacher= new Person("Tina");
teacher.teach("WAP");

window.onload=function(){
    //filter function invokation
    filterFunciton();

    //buble sort
    sort(arr);
    console.log("the sorted arry:"+arr);

    //Function object creation
    const teacher= new Person("Tina");
    teacher.teach("WAP");

    //using factory function
    const person = {
        name: 'Default',
        teach: function(subject) {
            return this.name + "is teaching "+ subject;
        }
    }
    const professor1 = Object.create(person);
    professor1.name="Tina";
    professor1.teach("WAP");


    //Q4 person, student and professor object creation using  object-prototype
    // approach1- Object prototype
    const person2={
        name:"unknown",
        age:"unknown",
        salute:function(){
        console.log("Good morning!, and in case I dont see you, good afternoon," +
            " good evening and good night!");},
        greeting:function(){
            console.log("Greetings, my name is " + this.name +
            " and I am "+ this.age+ " years old.");
        }
        }
      const student=Object.create(person2);
      student.major="";
      student.greeting=function(){
      console.log("Hey, my name is " +
          this.name + "and I am studying " + this.major);
      }
      const professor= Object.create(person2);
      professor.department="";
      professor.greeting=function(){
      console.log("Good day, my name is "+
          this.name+ " and I am in the "+ this.department);

      }
      const student1= Object.create(student);
       student1.name="dawit";
       student1.major="Computer science profession";
       student1.greeting();
       student1.salute();

    const pro= Object.create(professor);
    pro.name="Tina";
    pro.department="Computer science";
    pro.greeting();
    pro.salute();

    // approach2- Function prototype
    const pers= function(){
        this.name="unknown",
        this.age="unknown",
        this.salute=function(){
            console.log("Good morning!, and in case I dont see you, good afternoon," +
                " good evening and good night!");},
        greeting=function(){
            console.log("Greetings, my name is " + this.name +
                " and I am "+ this.age+ " years old.");
        }
    }

    const stud=new pers();
    stud.major="";
    stud.greeting=function(){
        console.log("Hey, my name is " +
            this.name + "and I am studying " + this.major);
    }

    const prof= new pers();
    prof.department="";
    prof.greeting=function(){
        console.log("Good day, my name is "+
            this.name+ " and I am in the "+ this.department);

    }
    const stud1= (student);
    stud1.name="dawit";
    stud1.major="Computer science profession";
    stud1.greeting();
    stud1.salute();

}










