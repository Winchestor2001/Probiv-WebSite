$(function(){


    $('.content__box').click(function(event){
        let boxText = $('.content__box-title').text()
        let data = $(event.target).closest('content__box-title').find('h1')
        
    });


    $('.hamburger').click(function(){
        $('.menu').toggleClass('active')
    });

});