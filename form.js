class Form{
    constructor(){

    }
   
    display(){
       if (state!==3){
      
        resizeCanvas(200,200,true);
        counter.getCount();
          
        var title=createElement('h1');
        title.html("The Students' Survey");
        title.position(540,0);
          
        var  input=createInput("",text); 
        var  input2=createInput("",text); 
        var  input3=createInput("",Number); 
        
        var button = createButton('Start');
        button.size(200,50);
        button.position(600,400);
       
       
        

        var txt1 = createElement("h3");
        var txt2 = createElement("h3");
        var txt3= createElement("h3");

        txt1.html("Name");
        txt2.html("Email");
        txt3.html("Class");

        txt1.position(500,240);
        txt2.position(500,290);
        txt3.position(500,340);
        input.position(600,250);
        input2.position(600,300); 
        input3.position(600,350);      
      
    
                                                                                         
        button.mousePressed(function (){     
           
          
            state=1;
         var survey= new Survey();  
         survey.display(); 
        
         
         
        

         var name=input.value();

         var greeting= createElement('h3');
         var greeting2= createElement('h3');
         greeting.html("Hello "+name);
         greeting.position(400,400)

         greeting2.html("Welcome to the Students' Survey, "+name);
         greeting2.position(400,450);
         
     
        
         input.hide();              
         input2.hide();           
         input3.hide();                                                   
         button.hide();                                                                
         resizeCanvas(200,3500,true);   

             
         voterCount+=1;
         counter.countVoter(voterCount);

         var voterName = database.ref('newVoter/Name');
         var voterClass = database.ref('newVoter/Class');
         var voterEmail = database.ref('newVoter/Email id');

         var newVoter = database.ref().push();
         newVoter.push("name").set(input.value())
         newVoter.push("class").set(input2.value())
         newVoter.push("email id").set(input3.value()) 

       
        
            
        
          

         voterName.set(input.value());
         voterClass.set(input3.value());
         voterEmail.set(input2.value());
           
         var im= createImg("zen.jpg");
         im.position(400,100);

       

         
        });
        
    }}

   
  
}