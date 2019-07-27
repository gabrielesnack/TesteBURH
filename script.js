const listafav = document.querySelectorAll('.content-box__boxfav_items li');
const listastar = document.querySelectorAll('.content-box__boxfav_items i');

listafav.forEach( (item,index) =>{
	item.addEventListener('click', () => {
		listastar[index].classList.toggle('fas');
		listastar[index].classList.toggle('far');
    });
});

