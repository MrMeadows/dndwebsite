function loadNav() {
    fetch('index/nav.html')
        .then(response => response.text())
        .then(text => document.getElementById('nav-placeholder').innerHTML = text);
}

loadNav();