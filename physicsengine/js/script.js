
function openTag(evt, tags) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tags).style.display = "block";
  evt.currentTarget.className += " active";
}

window.addEventListener('scroll',()=>{
  const buttons = document.querySelector(".tab-button-wrapper");
  const scrollEnd = window.innerHeight
  const scrolled = window.scrollY;
  if (scrolled >= scrollEnd/10*4){
    buttons.classList.add("show");
  }
  else{
    buttons.classList.remove("show");
  }
})
window.addEventListener('scroll',()=>{
  const buttons = document.querySelector(".physics-description-top");
  const scrollEnd = window.innerHeight
  const scrolled = window.scrollY;
  if (scrolled >= scrollEnd/5*1){
    buttons.classList.add("show");
  }
  else{
    buttons.classList.remove("show");
  }
})

window.addEventListener('scroll',()=>{
  const cover = document.querySelector(".cover-page");
  const scrollEnd = window.innerHeight
  const scrolled = window.scrollY;
  if (scrolled >= scrollEnd/5*1){
    cover.classList.add("show");
  }
  else{
    cover.classList.remove("show");
  }
})

window.addEventListener('scroll',()=>{
  const buttons = document.querySelector(".physics-description");
  const scrollEnd = window.innerHeight
  const scrolled = window.scrollY;
  if (scrolled >= scrollEnd/5*1){
    buttons.classList.add("show");
  }
  else{
    buttons.classList.remove("show");
  }
})




const textelement = document.querySelectorAll(".calc-box");
window.addEventListener("scroll", checktextelement);
checktextelement();
function checktextelement() {
  const triggertextelementTop_first = (window.innerHeight / 100) * 90;

  textelement.forEach((textelement) => {
    const textelementTop = textelement.getBoundingClientRect().top;
    const textelementpos = textelementTop;

    if (triggertextelementTop_first <= textelementpos) {
      textelement.classList.add("top"); 
    } else {
      textelement.classList.remove("top");
    }
  });
}



