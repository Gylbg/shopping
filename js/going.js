window.addEventListener('load', function() {
    var greetings = document.querySelector('.neon1');
    var date = new Date();
    var h = date.getHours();
    if (h < 12) {
        greetings.innerHTML = 'Good morning';
    } else if (h < 18) {
        greetings.innerHTML = 'Good afternoon';
    } else {
        greetings.innerHTML = 'Good evening';
    }




})