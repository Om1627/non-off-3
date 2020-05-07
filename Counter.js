class Counter {
    constructor(){

    }
    getCount(){
        var voterCountRef=database.ref('voterCount');
        voterCountRef.on("value",(data)=>{
            voterCount=data.val();
        })
    }
   
    countVoter(count){
       
        database.ref('/').update({
            voterCount:count
    
     }) }
    


}