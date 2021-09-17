/* <script>
//  let mi =document.querySelector('#mi');
let countE = document.querySelector('#btn');
let countf = document.querySelector('#countf');

let count = 0;
function clicked() {
  count = count + 1;
countf.innerText = count;
  if (countE.style.color !='green') {
      countE.style.color ='green'
  }else{
      countE.style.color ='red'
  }
 } */
// const menu = document.querySelector('#menu');

const list = document.querySelector('#lst');
// lst.addEventListener("click" , function () {
//   if(list.style.top != '2%'){
//     list.style.top = '2%'
//    } else{
//     list.style.top = '-190%'
//    }
// })

// function click_menu() {
//    if(list.style.top != '2%'){
//     list.style.top = '2%'
//    } else{
//     list.style.top = '-190%'
//    }
// }

menu.addEventListener('click',  () =>{
  if(list.style.top != '2%'){
    list.style.top = '2%'
   } else{
    list.style.top = '-190%'
   }
})
