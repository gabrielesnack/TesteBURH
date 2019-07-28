			// Box Stars set and unset

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
txtFilter.addEventListener('change', (evt) => {
	txtFind = evt.target.value;

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

		listaFav.forEach((item)=>{
			item.classList.add("esconder__item");
		});

		posItems.forEach((item)=>{
			listaFav[item].classList.remove("esconder__item");
		});
	}
});


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
