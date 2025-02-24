AFRAME.registerComponent("rabbit-book", {
  init: function () {
    let el = this.el;
    
    //Computer speech
    //say was moved to index.html to fix scope problems
    //we could have it here if we did a query selector and accessed the method through components
    
    const pages = [
      "Suddenly the little white rabbit was startled awake by a loud thud. The ground beneath him was shaking. Panicked, he jumped up and thought, the earth must be breaking apart! He began to run for his life.",
    ];
    //spit the text up into buttons
    for(let i = 0;i<pages.length;i++){
      
      let result = `<button class="speakingHead" onclick='say("${pages[i]}")'>🗣️</button><br>`;
      
      let words = pages[i].split(" ");
      for(let i = 0;i<words.length;i++){
        result += `<button onclick='say("${words[i]}")'>${words[i]}</button>`;
      }
      pages[i] = result;
    }
    
    let setReadingBox = (message)=>{
      let box = document.querySelector("#readingBox");
      box.innerHTML = message;
    };
    
    //setup clickable items
    
    // Squished Mango
    // let mangoPage = document.querySelector("#squishedMango");
    let mango = document.querySelector("#mango");
    let mangoSound = document.querySelector("#squish");
    //show and hide the mango
    // mangoPage.addEventListener("targetFound", (event) => {
    //   // let test = document.querySelector("#testPos");
    //   // let pagePosition = test.getAttribute("position");
    //   console.log("show mango ");
    //   // console.log(pagePosition.x+" "+pagePosition.y+" "+pagePosition.z);
    //   mango.setAttribute("visible", true);
    //  // mango.setAttribute("position", `${pagePosition.x} ${pagePosition.y} ${pagePosition.z}`)
    // });
    // mangoPage.addEventListener("targetLost", (event) => {
    //   console.log("hide mango");
    //   mango.setAttribute("visible", false);
    // });
    
    //control and reset the squish animation
    let mangoDelay;
    mango.addEventListener("click", (e) => {
      //cancel any timeout if it exists
      if (mangoDelay) {
        clearTimeout(mangoDelay);
      }
      //play the mango squish sound and start mango animation
      mangoSound.components.sound.playSound();
      mango.removeAttribute("animation");
      mango.setAttribute(
        "animation",
        "property: scale; to: 1 .01 1; dur: 450; easing: easeInSine; loop: false"
      );
      mangoDelay = setTimeout(() => {
        mango.removeAttribute("animation");
        mango.removeAttribute("animation__2");
        mango.setAttribute(
          "animation",
          "property: scale; to: 1 1 1; dur: 10; easing: linear; loop: false"
        );
        mango.setAttribute(
          "animation__2",
          "property: position; from: 0 2 0; to: 0 0 0; dur: 2000; easing: easeOutSine; loop: false"
        );
      }, 3000);
    });
    
    
    
   /* let mangoSound = document.querySelector("#squish");
    let mango = document.querySelector("#mango");
    let mangoScale = mango.getAttribute("scale");
    console.log("Scale: "+mangoScale.x+mangoScale.y+mangoScale.z);
    // let mangoPosition = {...mango.getAttribute("position")};
    let mangoDelay;
    mango.addEventListener("click", (e) => {
      //cancel any timeout if it exists
      if (mangoDelay) {
        clearTimeout(mangoDelay);
      }
      //play the mango squish sound and start mango animation
      mangoSound.components.sound.playSound();
      mango.removeAttribute("animation");
      mango.setAttribute(
        "animation",
        "property: scale; to: .5 .01 .5; dur: 450; easing: easeInSine; loop: false"
      );
      mangoDelay = setTimeout(() => {
        mango.removeAttribute("animation");
        mango.removeAttribute("animation__2");
        mango.setAttribute(
          "animation",
          "property: scale; to: .5 .5 .5; dur: 10; easing: linear; loop: false"
        );
        mango.setAttribute(
          "animation__2",
          "property: position; from: 0 2 -3; to: 0 0 -3; dur: 2000; easing: easeOutSine; loop: false"
        );
      }, 3000);
    });*/

    //Roaring Lion
    let lion = document.querySelector("#lion");
    let lionSound = document.querySelector("#roar");
    lion.addEventListener("click", (e) => {
      //play the lion roar sound
      lionSound.components.sound.playSound();
    });
    
    
    //rabbit cover
   let cover = document.querySelector("#cover");
    cover.addEventListener("targetFound", (event) => {
      //show the instructions
      document.querySelector("#instructions").style.display = "block";  
    });
    cover.addEventListener("targetLost", (event) => {
      //hide the instructions
      document.querySelector("#instructions").style.display = "none";
    });
    
    //scared rabbit page reading interaction
    let scaredRabbit = document.querySelector("#scaredRabbit");
    scaredRabbit.addEventListener("targetFound", (event) => {
      //update the reading box with buttons that can be pressed to talk
      setReadingBox(pages[0]);
      document.querySelector("#reading").style.display = "block"; 
    });
    scaredRabbit.addEventListener("targetLost", (event) => {
      console.log("scaredRabbit lost");
      //hide the instructions
      document.querySelector("#reading").style.display = "none";
      //stop the spoken text; synth is located in index.html but this works 
      synth.cancel();
    });
    
    
    
    //speed control for running rabbits
    //modify speed for all rabbits at once; the larger the number the longer it takes to animate
    let limiter = 1.25;
    //such a fancy query selector!
    let rabbits = document.querySelectorAll("a-gltf-model[src='#rabbitArt'], a-gltf-model[src='#brownRabbitArt']");
    for(let rabbit of rabbits){
      let origDuration = rabbit.getAttribute("animation").dur;
      rabbit.setAttribute("animation", "dur", origDuration*limiter);
    }
    
    
  },
});
