//ToDo List Project OverView
//Create an Add Button
//After entering the data and click the submit button, data will be show in the cart.
//If you wish to delete the data you can delete the data by pressing delete button.


//mentioned an empty array 
var addcart= [];
/*function logSubmit(event) {
   // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  //const form = document.getElementById('form');
  const form = document.querySelector("#form")
  form.addEventListener('submit', logSubmit); // */

  var form = document.querySelector("#form")
  var listgroup = document.querySelector("#list")
  //this will help you to get the local storage value you will be entering
  function rendercart(addcart){
    addcart.forEach(function (cart) { //no need 
    var li = document.createElement("li")
    //innerhtml will help you to get the data which you have entered
    li.innerHTML = cart.value//cartlist
    li.setAttribute('class', 'list-group-item')
    //appendchild will hep you to make you visible . without this you can't able to see the data you have entered
    listgroup.appendChild(li)
   }) 
}
  var storedData = localStorage.getItem("addcart")
 //if data exist then parse to get the normal format by using parse method
  if(storedData){
        var parsedData = JSON.parse(storedData)
        addcart= parsedData
      //  console.log(parsedData)
      rendercart(addcart)
  }

  form.addEventListener("submit", function(event){
   //prevent from page geting refreshed.
    event.preventDefault();
    var cartlist = form.addcart.value 
      //access the input values
     // console.log(form.addcart.value)
     //push/adding the fetched values into the add cart array
      addcart.push({
          values : cartlist 
          
      })
    //  console.log(addcart.push())
    //after adding value the it will get remove from the text field.
    form.addcart.value = ""


    //Now From here We are going to store the cart fetched values 

    //1. create a list so that we can able to store 

    
    var li = document.createElement("li")
    //innerhtml will help you to get the data which you have entered
    li.innerHTML = cartlist
    li.setAttribute('class', 'list-group-item')
    //appendchild will hep you to make you visible . without this you can't able to see the data you have entered
    listgroup.appendChild(li)



    //so far we can able to render/fetch the data and can able to store but the problem is after refresh its 
    //getting removed
     
    //creating a local storage so that data should be stored after getting refreshed.
    localStorage.setItem("addcart", JSON.stringify(addcart))   //localstorage.setItem("key" , value)
    



})


