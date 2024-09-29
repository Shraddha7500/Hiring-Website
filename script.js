$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if($(window).scrollTop()>60){
            $('.header').addClass('active');
        }else{
            $('.header').removeClass('active');
        }

        $('section').each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        })

    })

})
function sendwhatsapp()
{
   var phonenumber = "919557593410";
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var number = document.getElementById('number').value;
   var message = document.getElementById('message').value;
   var url ="https://wa.me/" + phonenumber + "?text="
   +"*Name:* " + name + "%0a"
   +"*Email:* " + email + "%0a"
   +"*Number:* " + number + "%0a"
   +"*Message:* " + message + "%0a%0a"
   +"Your message has been sent";
   window.open(url,'_blank').focus();
}