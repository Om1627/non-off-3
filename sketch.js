var canvas,backgroundImage;

var database;
var form,im;
var voterCount;
var counter
var state=0;
var suggBox;

var qn1,qn2,qn3,qn4,qn5,qn6,qn7,qn8,qn9,qn10;
database=firebase.database();

function setup(){
 
createCanvas(1200,800);



qn1=database.ref("Question1");
qn2=database.ref("Question2");
qn3=database.ref("Question3");
qn4=database.ref("Question4");
qn5=database.ref("Question5");
qn6=database.ref("Question6");
qn7=database.ref("Question7");
qn8=database.ref("Question8");
qn9=database.ref("Question9");
qn10=database.ref("Question10");
counter=new Counter();
form=new Form();

}



function draw(){
  
  form.display();
  
    if (state===3){
     textSize(20)
      text("Thank you",500,500);
    }
  
  
 
  
}


