window.addEventListener('load', function() {

    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus = document.querySelector('.focus');

    focus.addEventListener('mouseenter', function() {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer1);
    })
    focus.addEventListener('mouseleave', function() {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer1 = setInterval(function() {
            next.click();
        }, 1500)


    })
    var ul = document.querySelector('.focusimg');
    var ol = document.querySelector('.promo-nav');
    var focuswidth = focus.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = num1 = index;
            animate(ul, -index * focuswidth);
            /*  console.log(focuswidth);
             console.log(index); */
            /* console.log(-index * focuswidth); */
            /*  animate(ul, -index * focuswidth); */


        })
    }
    ol.children[0].className = "current";
    var frist = ul.children[0].cloneNode(true);
    ul.appendChild(frist);

    var num = 0;
    var num1 = 0;
    var flag = true;
    next.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;

            }

            num++;
            animate(ul, -num * focuswidth, function() {
                flag = true;
            });
            num1++;
            if (num1 == ol.children.length) {
                num1 = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[num1].className = 'current'
        }

    })

    prev.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focuswidth + 'px';
            }
            num--;
            animate(ul, -num * focuswidth, function() {
                flag = true;
            });
            num1--;
            if (num1 < 0) {
                num1 = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[num1].className = 'current'
        }

    })

    var timer1 = setInterval(function() {
        next.click();
    }, 1500)

})