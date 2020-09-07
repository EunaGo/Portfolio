$( document ).ready(function() {
    var text = document.getElementById("imgText");

    var typewriter = new Typewriter(text, {
        loop: false
    });

    typewriter.typeString('안녕하세요. ')
        .pauseFor(1800)
        // .deleteAll()
        .typeString('고은아의 포트폴리오입니다.')
        .pauseFor(2500)
        // .deleteChars(15)
        .start();

});