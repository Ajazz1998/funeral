const testimonialCarouselContainer = document.querySelectorAll('.client-testimonial-item');
const carouselSwitch = document.querySelectorAll('.client-testimonial-switch');

let carouselCounter = 1;
showContainer(carouselCounter);

function currentContainer(n) {
  showContainer(carouselCounter = n);
}


function showContainer(n) {

  for (let i = 0; i < testimonialCarouselContainer.length; i++) {
    testimonialCarouselContainer[i].style.display = 'none';
    testimonialCarouselContainer[i].classList.remove('fast-fade-in-left');
    carouselSwitch[i].classList.remove('active-carousel-switch');
  }

  if (carouselCounter > testimonialCarouselContainer.length) {
    carouselCounter = 1;
  }

  testimonialCarouselContainer[carouselCounter - 1].style.display = 'block';
  testimonialCarouselContainer[carouselCounter - 1].classList.add('fast-fade-in-left');
  carouselSwitch[carouselCounter - 1].classList.add('active-carousel-switch');

  carouselCounter++;
  setTimeout(showContainer, 30000);

}

carouselSwitch.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentContainer(i + 1);
  });
});


 /* Animate scroll */


 $(document).ready(function() {
   $('.js--wp-1').waypoint(function(){
       $('.js--wp-1').addClass('animated fadeIn'); 
   }, {
       offset: '50%'
   });
   
     $('.js--wp-slide').waypoint(function(){
       $('.js--wp-slide').addClass('animated fadeIn'); 
   }, {
       offset: '80%'
   });

    $('.js--wp-copy').waypoint(function(){
           $('.js--wp-copy').addClass('animated fadeInUp'); 
       }, {
           offset: '100%'
    });
    
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animated fadeInRight'); 
       }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(){
       $('.js--wp-3').addClass('animated fadeInLeft'); 
      }, {
       offset: '50%'
    });
    
    $('.js--wp-footerright').waypoint(function(){
       $('.js--wp-footerright').addClass('animated fadeInRight'); 
      }, {
       offset: '80%'
    });
    
    $('.js--wp-footerleft').waypoint(function(){
       $('.js--wp-footerleft').addClass('animated fadeInLeft'); 
      }, {
       offset: '80%'
    });
    
    $('.js--wp-25').waypoint(function(){
        $('.js--wp-25').addClass('animated fadeInRight'); 
       }, {
        offset: '50%'
    });
    
    $('.js--wp-35').waypoint(function(){
       $('.js--wp-35').addClass('animated fadeInLeft'); 
      }, {
       offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(){
       $('.js--wp-4').addClass('animated swing'); 
      }, {
       offset: '100%'
    });
    
    $('.js--wp-5').waypoint(function(){
       $('.js--wp-5').addClass('animated pulse'); 
      }, {
       offset: '70%'
    });
    
    $('.js--wp-projects1').waypoint(function(){
     $('.js--wp-projects1').addClass('animated fadeInUp'); 
    }, {
     offset: '80%'
    });
    
    $('.js--wp-projects2').waypoint(function(){
     $('.js--wp-projects2').addClass('animated fadeInUp'); 
    }, {
     offset: '50%'
    });
    
});
