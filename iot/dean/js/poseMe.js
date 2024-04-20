AFRAME.registerComponent("pose-me", {
    init: function () {
        let el = this.el;

        let cam = document.querySelector("#cam");

        let scene = document.querySelector("a-scene");
        scene.addEventListener("mouseenter", (e) => {
            if (e.target.getAttribute("class") == "poseMeTarget") {
                console.log("Overlapping");
                console.log(e.target);
                compareRotation(e.target);
            }
        });
        // randomly add  circles
        let numCircles = 1;
        for (let i = 0; i < numCircles; i++) {
            //make a circle
            let bubble = document.createElement("a-entity");
            bubble.setAttribute("pose-me-target", true);
            //bubble.setAttribute("id","hello");

            scene.appendChild(bubble);
        }

        const compareRotation = function (otherCircle) {
            let marginOfError = 15;
            let camRotate = cam.getAttribute("rotation").z;
            let otherRotate = otherCircle.getAttribute("rotation").z;
            console.log("compareRotation");
            console.log(otherRotate);
            //console.log(otherCircle.rotation.z);
            if (Math.abs(camRotate - otherRotate) <= marginOfError) {
                alert("match");
                //a match has happened
                otherCircle.setAttribute("hidden", true);// = true;
            }
        };
    }
});
