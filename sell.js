const droparea = document.getElementById("drop-area");
const inputFile = document. getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
   let imgLink = URL.createObjectURL(inputFile. files[0]);
   imageview.style.backgroundImage = `ur1(${imglink})`;
   imageView.textContent = "";
   imageView.style.border = 0 ;

}