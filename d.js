window.addEventListener('load', function() {
    var c = document.getElementById('d');
    c.width = c.parentNode.offsetWidth;
    c.height = 400;
    var w = c.offsetWidth,
    h = c.offsetHeight,
    ctx = c.getContext('2d');
    ctx.strokeStyle = '#fff';

    var d = [];
    for (var i = 0; i < 200; i++) {
        d.push(Math.random() * h/2);
    }

    var delay = 0;

    setTimeout(draw, delay);

    function draw() {
        c.width = c.width;
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 2;
        setTimeout(draw, (Math.sin(delay) + 2) * 20);
    }
});
