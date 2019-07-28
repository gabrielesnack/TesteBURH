			// MENU NAV USER AND SETTINGS

const btnmenu = document.querySelector('.menu__user'); //botão menu
const btnstatus = document.querySelectorAll('.navigation-menu-status-text'); //botao de status
const checkstatus = document.querySelectorAll('.navigation-menu-status i'); //pegar status de cada botao
const iconstatus = document.querySelectorAll('.menu__user__groupicon i')[1]; //pegar icone do status
const telanav = document.querySelector('.navigation'); //pegar a tela de fora

// TROCAR ICONE DE DISPONIVEL OU INDISPONIVEL
btnstatus.forEach( (item,index) =>{
	item.addEventListener('click', () => {
		if(index == 0){
			if(!checkstatus[1].classList.contains('fas','fa-check')){
				checkstatus[3].classList.remove('fas','fa-check');
				checkstatus[1].classList.add('fas','fa-check');
				iconstatus.classList.remove('icon_stred');
			}
		}else{
			if(!checkstatus[3].classList.contains('fas','fa-check')){
				checkstatus[1].classList.remove('fas','fa-check');
				checkstatus[3].classList.add('fas','fa-check');
				iconstatus.classList.add('icon_stred');
			}
		}
    });
});

//clicou fora do menu-nav então fechar.
telanav.addEventListener('click', trocarEstadoMenu);

//TROCAR CORES DO BOTAO MENU DE USUARIO E ABRIR NAVIGATION
btnmenu.addEventListener('click', trocarEstadoMenu);

function trocarEstadoMenu(){
	btnmenu.classList.toggle('menu-bg-blue');
	document.querySelector('.navigation').classList.toggle('active');
	document.querySelectorAll('.menu__user i')[0].classList.toggle('menu-user-white')
	document.querySelectorAll('.menu__user__groupicon i')[0].classList.toggle('menu-user-white')
}


			// BOX STARS SET AND UNSET

// Lista de Items e de Estrelas
const listaFav = document.querySelectorAll('.content-box__boxfav_items li');
const listaStar = document.querySelectorAll('.content-box__boxfav_items i');

// Para cada item adicione o evento click, caso executado troque seu estado.
listaFav.forEach( (item,index) =>{
	item.addEventListener('click', () => {
		listaStar[index].classList.toggle('fas');
		listaStar[index].classList.toggle('far');
    });
});

			// FILTER ITEMS IN BOX

// Lista de elementos Titles e de SubTitles
const elementsTitles = document.querySelectorAll('.content-box__boxfav_items h1');
const elementsSubTitles = document.querySelectorAll('.content-box__boxfav_items h2');

//Lista de items Title e SubTitle
const itemsTitles = [];
const itemsSubTitles = [];

// Campo que sera filtrado e e armazenado
const txtFilter = document.querySelector('.content-box__boxfav__header-group-search');
let txtFind = "";

//Percorrer a matriz de elementos, pegar seus valores e adicionar a uma matriz de items
elementsTitles.forEach((item,index)=>{
	itemsTitles.push(item.innerText);
});

elementsSubTitles.forEach((item,index)=>{
	itemsSubTitles.push(item.innerText);
});

//Caso ocorra a troca de texto armazene o texto e filtre.
setInterval(() => {
	if (txtFind != txtFilter.value){
		txtFind = txtFilter.value;

		//nenhum item encontrado
		if(filterTitle(txtFind).length == 0 && filterSubTitle(txtFind).length == 0){
			listaFav.forEach((item,index)=>{
				item.classList.add("esconder__item");
			});
		}else{
			// alert('pelo menos 1 item encontrado');

			itemsFiltrados = filterTitle(txtFind);
			let posItems = [];

			// percorrer e verificar items via titulo
			for (var i = 0; i < itemsFiltrados.length; i++) {
				for (var j = 0; j < elementsTitles.length; j++) {
					if(itemsFiltrados[i] == elementsTitles[j].innerText)
						posItems.push(j);
				}
			}

			// percorrer e verificar items via subtitulo
			itemsFiltrados = filterSubTitle(txtFind);
			for (var k = 0; k < itemsFiltrados.length; k++) {
				for (var l = 0; l < elementsSubTitles.length; l++) {
					if(itemsFiltrados[k] == elementsSubTitles[l].innerText)
						posItems.push(l);
				}
			}

			// remove todos items
			listaFav.forEach((item)=>{
				item.classList.add("esconder__item");
			});

			//traz somente os items filtrados
			posItems.forEach((item)=>{
				listaFav[item].classList.remove("esconder__item");
			});
		}}
}, 10);


// FILTRAR ITEMS POR TITULO
function filterTitle(text) {
  return itemsTitles.filter(function(el) {
      return el.toLowerCase().indexOf(text.toLowerCase()) > -1;
  })
}

// FILTRAR ITEMS POR SUBTITULO
function filterSubTitle(text) {
  return itemsSubTitles.filter(function(el) {
      return el.toLowerCase().indexOf(text.toLowerCase()) > -1;
  })
}
