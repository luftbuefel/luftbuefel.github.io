AFRAME.registerComponent("pose-me-target", {
    init: function () {
        let bubble = this.el;
        let flutter = document.createElement("a-entity");
        let circle = document.createElement("a-circle");

        const updateAttributes = function () {
            //position our target
            let xVariation = 3;
            let randomX = Math.random() * xVariation * 2 - xVariation;
            let position = randomX + " 6 -5";
            bubble.setAttribute("position", position);
            //falling animation
            bubble.setAttribute(
                "animation",
                `property: position; to:${randomX} 0.5 -5; dur: ${Math.random() * 500 + 700}; easing: linear; loop: true`
            );
            //randomly rotate it   -90 - 90 degrees
            circle.setAttribute(
                "rotation",
                "0 0 " + (Math.random() * 180 - 90)
            );
            circle.setAttribute("class" ,"poseMeTarget");
        };

        //flutter animation
        flutter.setAttribute(
            "animation",
            `property: position; to:0.2 0 0; dir:alternate; dur: 250; easing: easeInOutSine; loop: true`
        );
        //circle
        circle.setAttribute("src", "#cow");
        //update the changing attributes
        updateAttributes();
        //
        flutter.appendChild(circle);
        bubble.appendChild(flutter);
        //let timer =
        setInterval(updateAttributes, 1000);
        //clearInterval(timer);
    }
});
