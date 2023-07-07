let carouselItems = document.querySelectorAll('.carrossel li');
let currentlndex = 0;

function showSlide(index){
    //Remove a classe "active"de todos os itens do carrossel 
     carouselItems.forEach(function(item){
        item.classlist.remove('active');
     });
     //adiciona a classe "active" aoitem atual
     carouselItems[index].classList.add('active');
}

function nextSlide(){
   currentIndex++;
   if(currentIndex >= carouselItems.length){
      currentIndex = 0;
   }
   showSlide(currentIndex);

}

function prevSlide(){
   currentIndex--;
   if(currentIndex < 0){
      currentIndex = carouselItems.length-1;
   }
   showSlide(currentIndex);
   }

   document.querySelector('.carousel-control-prev').addEventListener('click',prevSlide);
   document.querySelector('.carousel-control-next').addEventListener('click',nextSlide);

   //exibe o primeiro slide ao carregara pagina
   showSlide(currentIndex);