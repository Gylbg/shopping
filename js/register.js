window.addEventListener('load', function() {
    var cek = document.querySelector('.cek');
    var username1 = document.querySelector('.phone');
    var password1 = document.querySelector('.secret');
    var userpass1 = document.querySelector('.btn');
    userpass1.addEventListener('click', function() {
        var user = username1.value;
        var pa = password1.value;
        if (cek.checked != true) {
            alert('请勾选用户协议')
        } else if (num1 == 1 && num2 == 1 && num == 1) {
            alert('注册成功');
            alert('即将跳转至登录界面');
            localStorage.setItem(user, pa);
            setTimeout(function() {
                window.location.href = 'login.html';
            }, 0)

        } else {
            alert('请输入正确的手机号或者密码格式');
        }


    })


    var ipt = document.querySelector('.phone');
    var message = document.querySelector('.normal')
    var pt = document.querySelector('.normal_icon');
    num1 = 0;
    ipt.onblur = function() {
        if (this.value.length !== 11) {
            message.className = 'error';
            message.innerHTML = '请重新输入';
            pt.className = 'error_icon';

        } else {
            message.className = 'success';
            message.innerHTML = '输入格式正确';
            pt.className = 'success_icon';
            num1 = 1;
        }
    }

    var ipt2 = document.querySelector('.secret');
    var message2 = document.querySelector('.normal2')
    var pt2 = document.querySelector('.normal_icon2');
    num2 = 0;
    ipt2.onblur = function() {
        if (this.value.length < 6 || this.value.length > 10) {
            message2.className = 'error';
            message2.innerHTML = '请重新输入';
            pt2.className = 'error_icon';

        } else {
            message2.className = 'success';
            message2.innerHTML = '输入格式正确';
            pt2.className = 'success_icon';
            num2 = 1;
        }
    }
    num = 0;
    var ipt3 = document.querySelector('.secret1');
    var message3 = document.querySelector('.normal3');
    var pt3 = document.querySelector('.normal_icon3');
    ipt3.onblur = function() {
        if (this.value !== ipt2.value || this.value == '') {
            message3.className = 'error';
            message3.innerHTML = '请重新输入';
            pt3.className = 'error_icon';
        } else {
            message3.className = 'success';
            message3.innerHTML = '输入正确';
            pt3.className = 'success_icon';
            num = 1;
        }
    }








})