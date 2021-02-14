cloneBtn = document
.querySelector('#clone'); 

parentlist = document
.querySelector('#parent-list');

listEl = document
.querySelector('#copy');

cloneBtn
.addEventListener('click',cloneList);

function cloneList(){
  let newList = listEl
  .cloneNode();

  console.log(newList);
}


