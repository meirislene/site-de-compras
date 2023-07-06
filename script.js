let carouselltems = document.querySelectorAll('.carrossel');
let currentlndex =0;

function showSlide(index){
    //Remove a classe "active"de todos os itens do carrossel 
     carouselltems,forEach(function(item){
        item.classlist.remove('actve');
     });
     //adiciona a classe "active" aoitem atual
     carouselltems[index.classlist.add('active');]
}