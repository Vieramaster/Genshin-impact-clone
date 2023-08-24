const responsiveOpen = document.querySelector("#responsiveOpen")
const responsiveClose = document.querySelector("#responsiveClose")
const element = document.querySelector('.header__box');
const shadow = document.querySelector("header")


responsiveOpen.addEventListener('click', () => {
    shadow.classList.add("shadow")
    element.classList.add('header__box-open');
    document.body.style.overflow = 'hidden';
  });

  function closeResponsive(){
    shadow.classList.remove("shadow")
    element.classList.remove('header__box-open');
    document.body.style.overflow = 'scroll';
  }

responsiveClose.addEventListener("click", closeResponsive)

window.addEventListener('resize', function() {
  let width = window.innerWidth;
  if (width < 1050) {
      closeResponsive();
  }
});



/*----------------------------------MODAL-------------------------------------------*/

  const modal = document.querySelector("#modal")

  const btnOpenModal = document.querySelector("#btn-open-modal");
  
  const btnCloseModal = document.querySelector("#btn-close-modal");
  document.querySelector("#modal");
  
  
  btnOpenModal.addEventListener("click", ()=> {
  modal.showModal();  modal.classList.add('active');
  })
  
  btnCloseModal.addEventListener("click", () => {
  modal.close();  modal.classList.remove('active');
  });
  
  
/*-------------------------------ul--------------------------------------------------*/

const openList = document.querySelector(".header__nav--recursos")
const list = document.querySelector (".subMenu")

openList.addEventListener("click", () =>{
  
  if(list.style.display === "none"){
    list.style.display = "block"
  }
  else{
    list.style.display = "none";
  }
});

