$('#users').keyup(function () {
    let user = users($(this).val())
    if(user){
        $("#users").autocomplete({
            source: function (request, response) {
                var data = user;
                response(data);
            },
            select: function (event, ui) {
                $("#users").val(ui.item.label); //ui.item is your object from the array
                let id = ui.item.id
                window.location.href = '/personal_page/'+id;
            }
        });
    }
})

let users = (params) => {
    let result = [];
    $.ajax({
        type: 'GET',
        url: '/get_users/',
        data: {search:params},
        success: function (data) {
            if(data){
                let user = {}
                $.each(data,function (key,value) {
                    user['label'] = value.username
                    user['value'] = value.username
                    user['id'] = value.id
                })
                result.push(user)
            }


        }
    });
    return result;
}