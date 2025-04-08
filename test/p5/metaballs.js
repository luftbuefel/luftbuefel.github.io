/*<script>
class Blob {
	constructor(x, y, widthBounds, heightBounds) {
		this.position = createVector(x, y)
		this.radius = random(20, 100);
		this.velocity = p5.Vector.random2D();
		this.velocity.mult(random(2, 5));
		this.heightBounds = heightBounds;
		this.widthBounds = widthBounds;
	}

	move() {
		this.position.add(this.velocity);
		if (this.position.x > this.widthBounds || this.position.x < 0) {
			this.velocity.x *= -1;
		}
		if (this.position.y > this.heightBounds || this.position.y < 0) {
			this.velocity.y *= -1;
		}
	}
}

let blobs = [];
let numBlobs = 5;
let original;
let sampleWidth = 160;
let sampleHeight = 120;
let proportion = sampleWidth/sampleHeight;
let reduction;
function setup() {
	let test;
	if(windowWidth>windowHeight){
		test = createCanvas(round(windowHeight*proportion), windowHeight);
	}else{
		test = createCanvas(windowWidth, round(windowWidth*(1/proportion)));
	}
	//draw something so the copied pixels will not have an alpha of 0
	background(51);
	original = createImage(sampleWidth,sampleHeight);
	original.copy(test, 0,0,original.width, original.height, 0,0,original.width, original.height);
	reduction = original.width/width;
	//create metaballs
	for (let i = 0; i < numBlobs; i++) {
		let blob = new Blob(random(original.width), random(original.height), original.width, original.height);
		blob.radius*=reduction;
		blob.velocity.mult(reduction);
		blobs.push(blob);
		
	}
}

//declare reusable variables out here 
let red, d, sum;

function draw() {
	clear();
	original.loadPixels();
	for (let x = 0; x < original.width; x++) {
		for (let y = 0; y < original.height; y++) {
			red = ((y * original.width) + x) * 4;
			sum = 0;
			for (let blob of blobs) {
				//using close enough distance speeds up calculations
				d = closeEnoughDistance(x, y, blob.position.x, blob.position.y);
				sum += (15000 * blob.radius) / d; 
			}
			//make the color look cool
			original.pixels[red] = sum;
			original.pixels[red + 1] = sum-255;
			original.pixels[red + 2] = sum-510;
		}
	}
	original.updatePixels();
	for (let blob of blobs) {
		blob.move();
	}
	copy(original, 0,0,original.width, original.height, 0,0,width, height);
}

function closeEnoughDistance(x1,y1,x2,y2){
	//square roots are expensive; who needs them anyway?
	return sq(x2-x1)+sq(y2-y1);
}
</script>*/