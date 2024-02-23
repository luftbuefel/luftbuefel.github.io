AFRAME.registerComponent('click-reposition', {
    init: function () {
        let el = this.el;

        this.reposition = function () {
            let pos = el.getAttribute("position");
            
            let newPosAmt = 2;
            if(pos.y>newPosAmt){
                newPosAmt *=-1;
            }
                
            let params = {
                property: 'position',
                to: {
                    x: pos.x,
                    y: pos.y+newPosAmt,
                    z: pos.z
                },
                dur: 2000,
                easing: 'easeInOutSine'
            };
            //alert(newPosAmt);
            el.setAttribute('animation', params);
        };
        this.el.addEventListener('click', this.reposition);
    },
    remove: function () {
        this.el.removeEventListener('click', this.reposition);
    }
});