// function getImage(event) {
//   var image = URL.createObjectURL(event.target.files[0]);
//   var imageDiv = document.getElementById('preview');
//   var newImg = document.createElement('img');
//   newImg.src = image;
//   newImg.width = "300"
//   imageDiv.appendChild(newImg)
// }

function handleChange(event) {
  const h2 = document.querySelector('h2');
  h2.innerText = event.target.value;
}


function handleKeyPress(event) {
  const { target: { value } } = event;
  const h2 = document.querySelector('h2');
  h2.innerText = value;
  console.log(event)
}

function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault();
  const list = document.getElementById('list');
  const { mealType, mealPrice, mealOrigin, mealAddress, mealImage } = document.forms["my-form"];

  const newEl = `
       <h3 id="namess"> The type of this food is ${mealType.value}<br> and the price is not so high ${mealPrice.value} ${mealImage.value}<br> so that you can have a really ${mealOrigin.value}<br> at ${mealAddress.value} <h3>`
  ;
  list.innerHTML += newEl;
  event.target.reset();
  handleCheckBox()
}


let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");

uploadButton.onchange = () => {
let reader = new FileReader();
reader.readAsDataURL(uploadButton.files[0]);
reader.onload = () => {
chosenImage.setAttribute("src",reader.result);
}
};
/////image/////
// const image_Inp = document.getElementById('input_Img');
// var upload_img = "";

//   image_Inp.addEventListener('click', function(){
//   const reader = new FileReader();
//   reader.addEventListener("load", ()=> {
//     upload_img = reader.result;
//     document.getElementById("#display_Img").style.backgroundImage = `url(${upload_img})`});
//   });
//   reader.readAsDataUrl(this.files[0]);

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('Button event', event)
  // return true;
}

function handleCheckBox() {
  const wrapperEl = document.querySelector('.university-input');
  const checked = document.getElementById('student').checked;
  if (checked) {
    wrapperEl.classList.add('show')
  } else {
    wrapperEl.classList.remove('show');
    const children = wrapperEl.children;
    for (let i = 0; i < children.length; i++) {
      children[i].value = '';
    }
  }
}