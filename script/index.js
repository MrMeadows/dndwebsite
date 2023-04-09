import * as source from 'node_modules/solbera-dnd-fonts/package.json';

function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(text => document.getElementById('nav-placeholder').innerHTML = text);
}

loadNav();