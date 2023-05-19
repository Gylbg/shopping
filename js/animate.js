function animate(obj, tragrt, stopnext) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (tragrt - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == tragrt) {
            clearInterval(obj.timer);
            if (stopnext) {
                stopnext();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)

}