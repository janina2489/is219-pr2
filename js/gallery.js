
$(document).ready(function() {
 $('.next').on('click', function() {
  var currentImg = $('.active');
  var nextImg = currentImg.next();

  if(nextImg.length == 0) {
   nextImg = $('.slider-inner img').first();
  }

  currentImg.removeClass('active');
  nextImg.addClass('active');
 });

 $('.prev').on('click', function() {
  var currentImg = $('.active');
  var prevImg = currentImg.prev();

  if(prevImg.length == 0) {
   prevImg = $('.slider-inner img').last();
  }

  currentImg.removeClass('active');
  prevImg.addClass('active');
 });

  
  
});
