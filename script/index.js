const dndFonts = require("solbera - dnd - fonts");

function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(text => document.getElementById('nav-placeholder').innerHTML = text);
}

loadNav();