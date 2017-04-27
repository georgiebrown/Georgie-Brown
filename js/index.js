$(document).ready(start);

function start(){

 $('.slider.round').click(changeBackground);
 $('.showWork').click(showWork);
 $('.showContact').click(showContact);
}

function changeBackground(){
  $( "body" ).toggleClass('orange');
}

function showWork() {
  $(".work").toggleClass('display');
}

function showContact(){
  $('.contact').toggleClass('display');
}

//
// $('body').addClass('orange');
// }
//
// function removeBackground(){
//   $('body').removeClass('orange');
// // }
// $("button").click(function(){
//     $("p").toggleClass("main");
// });
