window.onload = function() {
    showWelcomeOverlay();
};

function showWelcomeOverlay() {
    document.getElementById('welcomeOverlay').classList.add('active');
}

function closeOverlay() {
    document.getElementById('welcomeOverlay').classList.remove('active');
}


window.addEventListener('scroll', function() {
    var bottomMessage = document.getElementById('bottomMessage');
    var contentHeight = document.querySelector('.content').offsetHeight;
    var scrollPosition = window.innerHeight + window.pageYOffset;

    if (scrollPosition >= contentHeight) {
        bottomMessage.classList.add('show');
    } else {
        bottomMessage.classList.remove('show');
    }
});








