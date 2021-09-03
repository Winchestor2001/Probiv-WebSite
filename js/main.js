$(function(){


    const div = document.querySelector( ".content__inner" ); // находим первый элемент <div> в документе
	div.addEventListener("click", showTargets); // регистрируем обработчик события "click" для элемента <div>

	function showTargets( event ) {
        let res = event.target.innerText
        
        if (res == 'Пробив по номеру'){
            $('.modal_1').css({opacity: '1', visibility: 'visible'});
            $('.cencel i').css({top: '8px', right: '4px', fontSize: '22px'})
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'МВД'){
            $('.modal_2').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'ФНС'){
            $('.modal_3').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'ПФР'){
            $('.modal_4').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'Мини-досье (автовыдача)'){
            $('.modal_5').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'Верефикация Готовые кошельки'){
            $('.modal_6').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'Мобильные операторы'){
            $('.modal_7').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'Флуд и рассылка'){
            $('.modal_8').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        else if (res == 'Пробив КИ'){
            $('.modal_9').css({opacity: '1', visibility: 'visible'});
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
	}


    $('.hamburger').click(function(){
        $('.menu').toggleClass('active')
    });


    $('.cencel').click(function(){
        $('.modal_1').css({opacity: '0', visibility: 'hidden'});
        $('.modal_2').css({opacity: '0', visibility: 'hidden'});
        $('.modal_3').css({opacity: '0', visibility: 'hidden'});
        $('.modal_4').css({opacity: '0', visibility: 'hidden'});
        $('.modal_5').css({opacity: '0', visibility: 'hidden'});
        $('.modal_6').css({opacity: '0', visibility: 'hidden'});
        $('.modal_7').css({opacity: '0', visibility: 'hidden'});
        $('.modal_8').css({opacity: '0', visibility: 'hidden'});
        $('.modal_9').css({opacity: '0', visibility: 'hidden'});
    });
    $('.modal__btn').click(function(){
        $('.modal_1').css({opacity: '0', visibility: 'hidden'});
        $('.modal_2').css({opacity: '0', visibility: 'hidden'});
        $('.modal_3').css({opacity: '0', visibility: 'hidden'});
        $('.modal_4').css({opacity: '0', visibility: 'hidden'});
        $('.modal_5').css({opacity: '0', visibility: 'hidden'});
        $('.modal_6').css({opacity: '0', visibility: 'hidden'});
        $('.modal_7').css({opacity: '0', visibility: 'hidden'});
        $('.modal_8').css({opacity: '0', visibility: 'hidden'});
        $('.modal_9').css({opacity: '0', visibility: 'hidden'});
    });




});
