$(function(){
    $('.slider__inner').slick({
        dots: false,
        prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/icons/chevron-left.png" alt=""> </button>',
        nextArrow:'<button class="slick-arrow slick-next"> <img src="images/icons/chevron-right.png" alt=""> </button>',
});
$('.slider__mini-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/icons/chevron-left.png" alt=""> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <img src="images/icons/chevron-right.png" alt=""> </button>',
  });
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true
  });
 
var mixer = mixitup('.product__items-inner');
});