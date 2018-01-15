function ShowBack() {
    var content = this.getAttribute('content');
    var back = document.getElementById(content);
    back.classList.add('active');
    console.log(back);
}
function HideBack() {
    var content = this.getAttribute('content');
    var back = document.getElementById(content);
    back.classList.remove('active');
    console.log(back);
}

window.onload = function () {
    var list = document.getElementsByClassName('square')[0];
    var len = list.children.length;
    for (var i = 0; i < len; i++) {
        var item = list.children[i];
        item.addEventListener('mouseover', ShowBack, false);
        item.addEventListener('mouseleave', HideBack, false);
    }
};
