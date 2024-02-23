AFRAME.registerComponent('click-reposition', {
    schema: {
        min: {type: 'number', default: 0},
        max: {type: 'number', default: 2}
    },
    init: function () {
        let el = this.el;
        let target = this.data.max;
        let data = this.data;
        
        this.reposition = function () {
            let pos = el.getAttribute("position");
            //flip the target if it has been reached
            if(pos.y==target){
                target = target==data.max?data.min:data.max;
            }
            let params = {
                property: 'position',
                to: {
                    x: pos.x,
                    y: target,
                    z: pos.z
                },
                dur: 2000,
                easing: 'easeInOutSine'
            };
            el.setAttribute('animation', params);
        };
        this.el.addEventListener('click', this.reposition);
    },
    remove: function () {
        this.el.removeEventListener('click', this.reposition);
    }
});