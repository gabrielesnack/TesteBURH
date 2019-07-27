const listafav = document.querySelectorAll('.content-box__boxfav_items li');
const listastar = document.querySelectorAll('.content-box__boxfav_items i');
const Flaglistafav = [true,false,true,true,true,true];

listafav.forEach( (item,index) =>{
	item.addEventListener('click', () => {
		// listastar[index].classList.toggle('fas','fa-star')
        setStar(Flaglistafav[index], index);
    });
});

function setStar(bool, index){
	if(bool){	//Já é favorito? então set para false e troque o icone;
		Flaglistafav[index] = false;
		listastar[index].classList.remove("fa-star","fas");
        setTimeout(()=>{ listastar[index].classList.add("far","fa-star"); }, 10);
	}else{ //Nao é favorito? então set para true e troque o icone;
		Flaglistafav[index] = true;
		listastar[index].classList.remove("fa-star","far");
        setTimeout(()=>{ listastar[index].classList.add("fas","fa-star"); }, 10);
	}
}