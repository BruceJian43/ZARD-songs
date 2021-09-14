var collapsibleElems = document.querySelectorAll('.collapsible');
for (let i = 0; i < collapsibleElems.length; i++) {
    collapsibleElems[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}

// Reference:
// https://www.w3schools.com/howto/howto_js_collapsible.asp