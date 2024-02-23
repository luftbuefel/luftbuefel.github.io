AFRAME.registerComponent('click-color-change', {
    init: function () {
        let el = this.el;
        this.changeColor = function () {
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            el.setAttribute('color', `rgb( ${r},${g},${b})`);
        };
        this.el.addEventListener('click', this.changeColor);
    },
    remove: function () {
        this.el.removeEventListener('click', this.changeColor);
    }
});