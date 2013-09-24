window.addEventListener('load', function() {
    var c = document.getElementById('c');
    c.width = c.parentNode.offsetWidth;
    c.height = c.parentNode.offsetHeight;
    var w = c.offsetWidth,
        h = c.offsetHeight,
        ctx = c.getContext('2d');

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
        ctx.moveTo(0, 100 + h/2);
        for (i = 0; i < 200; i++) {
            ctx.lineTo(~~(w * (i / 200)), ~~(100 + (h/2) - d[i]));
        }
        ctx.moveTo(0, 0 + h/2);
        for (i = 0; i < 200; i++) {
            ctx.lineTo(~~(w * (i / 200)), ~~(200 + (h/2) - d[i]));
        }
        ctx.moveTo(0, 0 + h/2);
        for (i = 0; i < 200; i++) {
            ctx.lineTo(~~(w * (i / 200)), ~~(0 + (h/2) - d[i]));
        }
        ctx.moveTo(0, -50 + h/2);
        for (i = 0; i < 200; i++) {
            ctx.lineTo(~~(w * (i / 200)), ~~(-50 + (h/2) - d[i]));
        }
        ctx.moveTo(0, 250 + h/2);
        for (i = 0; i < 200; i++) {
            ctx.lineTo(~~(w * (i / 200)), ~~(250 + (h/2) - d[i]));
        }
        ctx.stroke();
        ctx.beginPath();
        for (i = 0; i < 200; i++) {
            ctx.rect(~~(w * (i / 200)), ~~(100 + (h/2) - d[i]), 1, 1);
        }
        ctx.fill();
        if (bubbleSort(d)) {
            d = [];
            for (i = 0; i < 200; i++) {
                d.push(Math.random() * h/2);
            }
        }
        delay += 0.1;
        setTimeout(draw, (Math.sin(delay) + 2) * 20);
    }

    function bubbleSort(a) {
        var sorted = true;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                sorted = false;
            }
        }
        return sorted;
    }
});
