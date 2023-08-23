const responsiveOpen = document.querySelector("#responsiveOpen")
const responsiveClose = document.querySelector("#responsiveClose")



responsiveOpen.addEventListener('click', () => {
    const element = document.querySelector('.header__box');
    element.classList.add('header__box-open');
  });

  responsiveClose.addEventListener('click', () => {
    const element = document.querySelector('.header__box');
    element.classList.remove('header__box-open');
  
    
  });


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
  
  
 