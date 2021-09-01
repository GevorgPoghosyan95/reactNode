$(document).ready(function () {
    $.ajaxSetup({
        headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}
    });

    $( "form" ).submit(function(e ) {
        $('.error').remove()
        e.preventDefault();
        let params =  $( this ).serializeArray();
        $.ajax({
            type:'POST',
            url:'/registration',
            data:params,
            success:function(result){
                if(result.errors == true ){
                    if(result.error.type == "validation"){
                        $.each(result.error.messages, function (key, value) {
                            $('#' + key).after(`<div class="error">${value}</div>`)
                        })
                    }else{
                        errorModalShow(result.error.messages)
                    }
                }else{
                    successModalShow(result.message)
                    window.location.href = '/personal_page';
                }

            }
        });
    });

    $('.close').click(function () {
        modalClose()
    })

});


function errorModalShow(message) {
    $("#errorModal").modal('show');
    $('.error-message').text(message)
}

function modalClose(){
    $(".modal").modal('hide');
}

function successModalShow(message) {
    $("#successModal").modal('show');
    $('.success-message').text(message)
}
