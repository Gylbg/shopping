window.addEventListener('load', function() {


    var cek = document.querySelector('.cek');
    /*  localStorage.clear(); */
    var login = document.querySelector('.phone');
    var userpa = document.querySelector('.secret');
    var logining = document.querySelector('.btn');
    var user_nameArr = new Array(localStorage.length);
    for (i = 0; i < localStorage.length; i++) {
        user_nameArr[i] = localStorage.key(i);
    }
    logining.addEventListener('click', function() {
        if (cek.checked != true) {
            alert('请勾选用户协议');
        } else if (num1 == 1 && num2 == 1) {
            if (login.value != '') {

                if (user_nameArr.includes(login.value)) {
                    var pas = localStorage.getItem(login.value);
                    if (userpa.value == pas) {
                        alert('登录成功');
                        setTimeout(function() {
                            window.location.href = 'index.html'
                        }, 0);
                    } else {
                        alert('登录密码错误');
                    }
                } else {
                    alert('该账号不存在')
                }


            } else {
                alert('请输入用户名')
            }
        } else {
            alert('输入的用户名或密码不正确');
        }

    })

    num1 = 0;
    var ipt = document.querySelector('.phone');
    var message = document.querySelector('.normal');
    var icon1 = document.querySelector('.normal_icon');
    ipt.onblur = function() {
        if (this.value.length != 11) {
            icon1.className = 'error_icon';
            message.className = 'error';
            message.innerHTML = '您输入账号格式不正确';
            num1 = 0;
        } else {
            icon1.className = 'success_icon';
            message.className = ' success';
            message.innerHTML = '您输入账号格式正确';
            num1 = 1;
        }
    }

    num2 = 0;
    var ipt1 = document.querySelector('.secret');
    var message1 = document.querySelector('.normal2');
    var icon2 = document.querySelector('.normal_icon2');
    ipt1.onblur = function() {
        if (this.value.length < 6 || this.value.length > 10) {
            icon2.className = 'error_icon';
            message1.className = 'error';
            message1.innerHTML = '您输入密码格式不正确';
            num2 = 0;
        } else {
            icon2.className = 'success_icon';
            message1.className = ' success';
            message1.innerHTML = '您输入密码格式正确';
            num2 = 1;
        }
    }

})