exports.execute = function (msg, callback) {
    console.log(msg.header);
    switch (msg.header) {
        case 'Login':
            login(msg.data, function (res) {
                callback(res);
            });
            break;
        default:
            callback({ result: 'error', message: data.header + ' : header is not defined' });
            break;
    }
}

function getUserInfo() {
    return { id: "wany", pwd: "1234" };
}

function login(data, callback) {
    var res = {
        result:"failure",
        message:"아이디/패스워드가 올바르지 않습니다."
    };

    const userinfo = getUserInfo();
    if (data.id == userinfo.id && data.pwd == userinfo.pwd) {
        res.result = "success";
        res.message = "로그인에 성공하였습니다.";
    } else if (data.id == "wany") {
        res.result = "failure";
        res.message = "패스워드가 올바르지 않습니다.";
    } 
    callback(res);
}