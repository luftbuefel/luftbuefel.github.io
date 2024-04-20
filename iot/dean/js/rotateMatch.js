AFRAME.registerComponent("track-rotation", {
    
    schema: {
        intialColor: { type: "color", default: "" },
        onClick: { type: "color", default: "" }
    },
    
    init: function () {
        let el = this.el;
        let data = this.data;
        el.setAttribute("value", "charles");
    
    },    
    
    tick: function (time, timeDelta) {        
        let el = this.el;
        el.setAttribute("value", "rotation: "+el.getAttribute("rotation").z);
    }
});
