function relogio() {
    var t = moment(),
        a = t.minutes() * 6,
        o = t.hours() % 12 / 12 * 360 + (a / 12);
    $(".hour").css("transform", "rotate(" + o + "deg)");
    $(".min").css("transform", "rotate(" + a + "deg)");
}

function atualizarRelogio() {
    relogio(), setTimeout(atualizarRelogio, 1000)
}
atualizarRelogio();