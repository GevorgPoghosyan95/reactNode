$('#addFriend').click(function () {
    let authUserId = $('#authUser').val()
    $.ajax({
        type: 'GET',
        url: '/friendRequest/',
        data: {authUserId:authUserId},
        success: function (data) {
            console.log(data)
        }
    });
})