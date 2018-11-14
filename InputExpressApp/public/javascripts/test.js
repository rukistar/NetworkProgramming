function test()
{
    var data = {
        msg: $("#name").val()
    };

    console.log(data);

    $("#result").text(data.msg);

    $.ajax({
        type: 'POST',
        url: '/',
        data: data,
        conntentType: 'application/json',
        async: true,
        success: function (data) {
            // 결과 받음
            var res = data;

            // 성공인 경우
            if (res.result == 'success') {
                console.log("success!!");
            }
            // 실패인 경우
            else if (res.result == 'failure') {
                console.log("failure!!");
            }
            // 그 이외의 경우
            else {
                alert(JSON.stringify(res));
            }
            
            $("#result").text(res.result)
        }
    });
}