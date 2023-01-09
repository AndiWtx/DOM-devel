// function colorChange() {
//   let pTags = document.getElementsByTagName("p");
//   for (let i = 0; i<pTags.length; i++){
//     pTags[i].style.color= "red";
//   }
// }

document.getElementById('btnid').addEventListener('click', function () {
  let pTags = document.getElementsByTagName("p");
  for (let i = 0; i<pTags.length; i++){
    pTags[i].style.color= "red";
  }

})