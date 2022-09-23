$(function () {
    var field = new Array("login",  "name", "surname", "date", "address", "password", "password2");

    $('.registration input').focusout(function () {
        for(var i=0;i<field.length;i++){
            if($(this).attr("name")==field[i]){
                if(!$(this).val()){
                    $(this).css({
                        'border-color': '#ed0b0e',
                        'border-right': 'none'
                    })
                        .siblings(".no").css("display","inline-block")
                        .siblings(".yes").css('display', 'none')
                        .siblings("small").text("Это поле обязательно для заполнения");
                    $(".registration button").attr("disabled", "disabled").css('cursor','not-allowed');
                }
                else{
                    $(".registration button").removeAttr("disabled").css('cursor','pointer');
                    $(this).css({
                        'border-color': '#28a745',
                        'border-right': 'none'
                    })
                        .siblings(".yes").css("display","inline-block")
                        .siblings(".no").css("display","none")
                        .siblings('small').text("");
                }
            }
        }
    });

    var psw = false, email = false;

    $('.registration input').on('keyup', function () {
        for(var i=0;i<field.length;i++){
            if($(this).attr("name")==field[i]){
                /*if($(this) == $(".registration input[name = 'email']")){
                    if(!email){
                        $(this).css({
                            'border-color': '#ed0b0e',
                            'border-right': 'none'
                        })
                            .siblings(".no").css("display","inline-block")
                            .siblings(".yes").css('display', 'none')
                            .siblings("small").text("Не правельный формат Email. Пример: 1234@123.ru");
                        $(".registration button").attr("disabled", "disabled").css('cursor','not-allowed');
                    }else{
                        $(".registration button").removeAttr("disabled").css('cursor','pointer');
                        $(this).css({
                            'border-color': '#28a745',
                            'border-right': 'none'
                        })
                            .siblings(".yes").css("display","inline-block")
                            .siblings(".no").css("display","none")
                            .siblings('small').text("");
                    }
                }*/
                $(".registration button").removeAttr("disabled").css('cursor','pointer');
                $(this).css({
                    'border-color': '#28a745',
                    'border-right': 'none'
                })
                    .siblings(".yes").css("display","inline-block")
                    .siblings(".no").css("display","none")
                    .siblings('small').text("");
            }
        }
    });

    $(".registration input[name = 'password2'],.registration input[name = 'password']").on('keyup',function() {
        var pas = $(".registration input[name = 'password']");
        var pas2 = $(".registration input[name = 'password2']");
        var btn = $(".registration button");
        if(pas.val() !== pas2.val()) {
            psw = false;
            pas2.css({
                'border-color': '#ed0b0e',
                'border-right': 'none'
            })
                .siblings(".no").css("display","inline-block")
                .siblings(".yes").css('display', 'none')
                .siblings("small").text("Пароли не совподают");
            btn.attr("disabled", "disabled").css('cursor','not-allowed');
        } else {
            psw = true;
            btn.removeAttr("disabled").css('cursor','pointer');
            pas2.css({
                'border-color': '#28a745',
                'border-right': 'none'
            })
                .siblings(".yes").css("display","inline-block")
                .siblings(".no").css("display","none")
                .siblings('small').text("");
        }
    });

    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    $('.registration input[name="email"]').on('keyup',function () {
        if($(this).val().search(pattern) != 0){
            $(this).css({
                'border-color': '#ed0b0e',
                'border-right': 'none'
            })
                .siblings(".no").css("display","inline-block")
                .siblings(".yes").css('display', 'none')
                .siblings("small").text("Не верный формат Email. Пример: 1234@123.ru");
            $(".registration button").attr("disabled", "disabled").css('cursor','not-allowed');
        }else{
            $(".registration button").removeAttr("disabled").css('cursor','pointer');
            $(this).css({
                'border-color': '#28a745',
                'border-right': 'none'
            })
                .siblings(".yes").css("display","inline-block")
                .siblings(".no").css("display","none")
                .siblings('small').text("");
        }
    });
});