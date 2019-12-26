
//serviceWorker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
    }, function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
    });
    });
    }
// scroll--!
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $("#btntop").fadeIn();
        } else {
            $("#btntop").fadeOut();
        }
    });
    $("#btntop").click(function () {
        $("html ,body").animate({scrollTop : 0}, 1000)
    })
});
//

$("#filePdf").click(function () {
    window.open("./cvPDF/.pdf")
})
document.getElementById("contact").addEventListener("click", Fcontact)

function Fcontact() {
    window.location.href = "contact.html"
}
document.getElementById("profile").addEventListener("click", Fprofile)

function Fprofile() {
    window.location.href = "profile.html"
}
document.getElementById("logoimg").addEventListener("click",Findex)
function Findex() {
    window.location.href="index.html"
}
//

document.getElementById("clear").addEventListener("click", Fclear)

function Fclear() {
    document.getElementById("FN").value=''
    document.getElementById("LN").value = ''
    document.getElementById("Email").value = ''
    document.getElementById("text").value = ''
}






