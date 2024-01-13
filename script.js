
var n=0;


var btn = document.querySelector("#btn")
var parent = document.querySelector(".todo-list");
var input = document.querySelector("#input");

btn.addEventListener("click", myFunction)

function myFunction() {


    if(input.value==""||input.value=="  ")
    {
      alert("enter a value");
    }
    else if(n==0)
{

 var value=document.createElement("div")
  
    var list = document.createElement("li")
    
    list.innerHTML = input.value;
    list.id='l';
   
    var editbtn = document.createElement("button")
    editbtn.innerText="  Edit  "
    editbtn.id='eb'

      


    var delbtn = document.createElement("button")
    delbtn.innerText="Delete"
    delbtn.id='db'
      delbtn.addEventListener("click",del)
      function del(){
        delbtn.parentElement.remove()
      }
     
     
    value.append(list)
    value.append(delbtn)
    value.append(editbtn)
    // parent.append(clearbtn)

    parent.append(value)
    input.value=""



    let clearbtn=document.getElementById("clear")
      clearbtn.addEventListener("click", clearFunction);
    
    function clearFunction() {
      list.remove()
      delbtn.remove()
      editbtn.remove();
    }
    editbtn.addEventListener("click" ,edit1)

    function edit1(){
    n = list;
    input.value = n.innerHTML;
    } 

    }

 
else{
  n.innerHTML = input.value;
   input.value="";
n=0;
}
      
      
      

}