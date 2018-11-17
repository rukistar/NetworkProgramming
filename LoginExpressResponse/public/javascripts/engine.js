function send_post(data, callback)
{
    console.log(data);
    $.ajax({
        type: 'POST',
        url: '/',
        data: data,
        conntentType: 'application/json',
        async: true,
        success: function (res) {
            callback(res);
        }
    });
}