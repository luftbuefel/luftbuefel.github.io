AFRAME.registerComponent("random-rotate-z", {
    init:function(){
        let zRotation = Math.random()*360;
        this.el.setAttribute("rotation", `0 0 ${zRotation}`);
    },
    remove:function(){        
    }
});