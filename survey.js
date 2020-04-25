class Survey {
    constructor(){

    }
    display(){
        var q1 = createElement("h3");
        var q2 = createElement("h3");
        var q3 = createElement("h3");
        var q4 = createElement("h3");
        var q5 = createElement("h3");
        var q6 = createElement("h3");
        var q7 = createElement("h3");
        var q8 = createElement("h3");
        var q9 = createElement("h3");
        var q10 = createElement("h3");

        q1.position(300,600);
        q2.position(300,850);
        q3.position(300,1100);
        q4.position(300,1350);
        q5.position(300,1600);
        q6.position(300,1850);
        q7.position(300,2100);
        q8.position(300,2350);
        q9.position(300,2600);
        q10.position(300,2850);

        q1.html("Q.1 Do you agree that there should be one day in the week when we can wear free dress?")
        q2.html("Q.2 Do you agree that there should be recess time?")
        q3.html("Q.3 Do you agree that sports and extra-curricular activities should be expanded? ")
        q4.html("Q.4 Do you agree that mobile phone should be allowed in school?")
        q5.html("Q.5 Do you agree that sports equipment should be improved?")
        q6.html("Q.6 Should students participate in events only if they want to?")
        q7.html("Q.7 Should Air Coditioners be installed in classrooms?")
        q8.html("Q.8 Should Gujarati be teached from first standard?")
        q9.html("Q.9 Should teachers equally support boys and girls?")
        q10.html("Q.10 Should soaps be placed in all washrooms?")

        var q1y = createButton("Yes");
        var q2y = createButton("Yes");
        var q3y = createButton("Yes");
        var q4y = createButton("Yes");
        var q5y = createButton("Yes");
        var q6y = createButton("Yes");
        var q7y = createButton("Yes");
        var q8y = createButton("Yes");
        var q9y = createButton("Yes");
        var q10y = createButton("Yes");

        var q1n = createButton("No");
        var q2n = createButton("No");
        var q3n = createButton("No");
        var q4n = createButton("No");
        var q5n = createButton("No");
        var q6n = createButton("No");
        var q7n = createButton("No");
        var q8n =createButton("No");
        var q9n = createButton("No");
        

       q1y.position(300,725);
       q2y.position(300,975);
       q3y.position(300,1225);
       q4y.position(300,1475);
        q5y.position(300,1725);
       q6y.position(300,1975);
        q7y.position(300,2225);
       q8y.position(300,2475);
       q9y.position(300,2725);
        q10y.position(300,2975);

        q1n.position(300,750);
       q2n.position(300,1000);
        q3n.position(300,1250);
       q4n.position(300,1500);
       q5n.position(300,1750);
      q6n.position(300,2000);
       q7n.position(300,2250);
       q8n.position(300,2500);
        q9n.position(300,2750);
       
        q1y.mousePressed(function(){
           qn1.push("yes") 
        })
        q2y.mousePressed(function(){
            qn2.push("yes") 
         })
         q3y.mousePressed(function(){
            qn3.push("yes") 
         })
         q4y.mousePressed(function(){
            qn4.push("yes") 
         })
         q5y.mousePressed(function(){
            qn5.push("yes") 
         })
         q6y.mousePressed(function(){
            qn6.push("yes") 
         })
         q7y.mousePressed(function(){
            qn7.push("yes") 
         })
         q8y.mousePressed(function(){
            qn8.push("yes") 
         })
         q9y.mousePressed(function(){
            qn9.push("yes") 
         })
         q10y.mousePressed(function(){
            qn10.push("yes") 
         })
         q1n.mousePressed(function(){
            qn1.push("no") 
         })
         q2n.mousePressed(function(){
            qn2.push("no") 
         })
         q3y.mousePressed(function(){
            qn3.push("no") 
         })
         q4y.mousePressed(function(){
            qn4.push("no") 
         })
         q5y.mousePressed(function(){
            qn5.push("no") 
         })
         q6y.mousePressed(function(){
            qn6.push("no") 
         })
         q7y.mousePressed(function(){
            qn7.push("no") 
         })
         q8n.mousePressed(function(){
            qn8.push("no") 
         })
         q9n.mousePressed(function(){
            qn9.push("no") 
         })
        
    }
}