import * as source from 'packages.json';

function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(text => document.getElementById('nav-placeholder').innerHTML = text);
}

loadNav();