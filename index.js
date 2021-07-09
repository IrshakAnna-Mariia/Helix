$('#menu_icon').on('click', function () {
    $('body').toggleClass('lock');
    $('#menu, #menu_icon').toggleClass('active');
})


$('.element h4').on('click', function (e) {
    let img, element;

    element = document.getElementsByClassName("element");
    img = document.getElementsByClassName("imgForFAQ");

    $('.element h4').not($(this)).removeClass('active');
    $('.element p').not($(this).next()).slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);

    for (let i = 0; i < element.length; i++) {
        if (element[i].id === e.target.parentElement.id) document.getElementById('currentImgForFAQ').src = img[i].src;
    }
})

document.getElementById("default").click();

document.getElementById("defaultOpen").click();


function openCity(event, name) {
    let tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    if (Number(window.innerWidth) > 768) {
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById("slider").className.replace(" js-flickity", "");

        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(name).style.display = "block";

        event.currentTarget.className += " active";
    } else {
        console.log('why')
        document.getElementById("slider").className += " js-flickity";

        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    }
}

window.addEventListener('resize', function () {
    if (Number(window.innerWidth) === 768 || Number(window.innerWidth) === 769 ) {
        window.location.reload()
    }
});