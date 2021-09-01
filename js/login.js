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
            url:'/login',
            data:params,
            success:function(result){
                if(result.errors == true ){
                    if(result.error.type == "validation"){
                        $.each(result.error.messages, function (key, value) {
                            $('#' + key).after(`<div class="error">${value}</div>`)
                        })
                    }else{
                        alert(result.error.messages)
                    }
                }else{
                    window.location.href = '/personal_page';
                }

            }
        });
    });

});