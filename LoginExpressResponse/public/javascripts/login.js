function login() {
    var data = {
        msg: JSON.stringify({
            header: "Login",
            data: {
                id: $("#usr").val(),
                pwd: $("#psw").val()
            }
        })
    };

    send_post(data, function (res) {
        parse(res);
    });
}

function parse(res) {
    console.log(res);
    if (res.result == 'success') { // 성공인 경우
        alert(res.message);
        location.href = "/";
    }
    else if (res.result == 'failure') { // 실패인 경우
        alert(res.message);
    }
    else { // 그 이외의 경우
        alert(JSON.stringify(res));
    }
}
