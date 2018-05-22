window.addEventListener('load',function () {
let form = document.querySelector('#form');

form.addEventListener('submit',function(event) {
    event.preventDefault();

    let prodName = document.querySelector('#name');
    let prodDescripcion = document.querySelector('#desc');

    let content = {
        title: prodName.value,
        description: prodDescripcion.value 
   };

   let options = {
    method: 'post',
    //body: content
    body: JSON.stringify(content),
    headers: {'Content-Type':'applicarion/json'}
   };

   fetch('/product',options)
   .then(function(response) {
       return response.json();
   })
   .then(function(result){
       console.log(result);
   })
   .catch(function (error){
       console.log(error);
   })

 });
});
