const userModel = require('../models/user.models')

async function informationUser(id) {
    let user = await userModel.selectUser(id);
    console.log(user);
    return user;
}
$(document).ready(function() {
    // hiển thị form thông tin để sửa
    $('.btn-outline-info').click(function() {
        $('.information').css('opacity', '0.2');
        $('.info-details form').css({ "z-index": '1', "position": "absolute" });
        $(".title-info").css({ "z-index": '1', "position": "absolute" });
        // console.log(this.id)
        // let currentId = this.id;
        // console.log(currentId);
        // let user = await userModel.selectUser(currentId);
        $(".info-details form  input").val('password');
    });

    // đóng form thông tin
    $(".logbtn").click(function() {
        $('.information').css('opacity', '1');
        $('.info-details form').css({ "z-index": '-1', "position": "absolute" })
        $(".title-info").css({ "z-index": '-1', "position": "absolute" })
    });
});