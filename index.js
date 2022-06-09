// code your solution here

function saturdayFun(activity="roller-skate"){
    /*const activity="roller-skate"*/
    return `This Saturday, I want to ${activity}!`

}
saturdayFun("bathe my dog");


function mondayWork(doSomething="go to the office"){
     return `This Monday, I will ${doSomething}.`;
}
mondayWork("go to class");

   /* let result= wrapAdjective("*")
    let emphatic= result("a hard worker")
  function result() {
     return `You are ${result} ${emphatic} ${result}!`
  }*/
  
  /*function wrapAdjective(msg="You are"){

     return function (wrapper= "*", otherMsg="a hard worker"){
       
        return `${msg} ${wrapper} ${otherMsg}`;
  };
}
outer("You are")("||","a dedicated programmer");*/
function wrapAdjective(wrapper="*"){
  const part1="You are"
   
         return function(quality="special"){
            
            return `${part1} ${wrapper}${quality}${wrapper}!`

         };
    
};
