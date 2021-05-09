const slides = document.querySelector(" .hero-slider").children;
console.log(slides)

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

prev.addEventListener("click",function(){
   prevSlide();
})
next.addEventListener("click",function(){
    nextSlide();
})

function prevSlide(){
    if(index == 0){
        index = slides.length-2;
    }
    else{
        index--;
    }
   changeSlides()
}
function nextSlide(){
    if(index == slides.length-2){
        index = 0;
    }
    else{
        index++;
    }
   changeSlides(); 
}

function changeSlides(){
    for(let i = 0 ; i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add('active');
}
