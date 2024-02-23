AFRAME.registerComponent('click-rotate', {
    init: function () {
        let el = this.el;
        let origRotation = el.getAttribute('rotation');
        let rotating = false;
        this.startRotation = function (e) {
            if(rotating){
                return;
            }
            rotating = true;
            let params = {
                property: "rotation",
                to: `${360} ${origRotation.x} ${origRotation.z}`,
                easing: "linear",
                dur: 3000,
                loop: true
            };
            el.setAttribute('animation', params);
        };
        this.el.addEventListener('click', this.startRotation);
    },
    remove: function () {
        this.el.removeEventListener('click', this.startRotation);
    }
});