
const navbarImages = document.querySelectorAll('.navbar-img');

navbarImages.forEach((img) => {
  img.addEventListener('click', () => {
    const navbarItem = img.nextElementSibling; 
    navbarItem.classList.toggle('navbar-item-show');
  });



});


//crear una function que elimine el texto de la li y tambien redondee la img, le agrega x class a uno y Y class a otro

//a lo anterior mencinado: que de base este chiquito y cuando se activa se agranda, o sea ir al css y hacerlo chiquito primero que la modificacion sea una class agrandadora.