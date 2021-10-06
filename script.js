
let spooky_array = [];

// preload images
let pumpkin;
let pumpkin_inverted;

let candy;
let candy_inverted;

let ghost;
let ghost_inverted;

let red_glow;

let character_count = 1;

function preload() {
	pumpkin = loadImage('images/pumpkin.png', 40, 40);
	pumpkin_inverted = loadImage('images/pumpkin_inverted.png', 40, 40);
	
	candy = loadImage('images/candy.png', 40, 40);
	candy_inverted = loadImage('images/candy_inverted.png', 40, 40);
	
	ghost = loadImage('images/ghost.png', 40, 40);
	ghost_inverted = loadImage('images/ghost_inverted.png', 40, 40);
	
	red_glow = loadImage('images/red_glow.png');

}

function setup() {
	imageMode(CENTER);
	createCanvas(800, 600);
	red_glow.resize(250, 0);

}

function draw() {
	background(20);

	for (let i = 0; i < spooky_array.length; i++) {
		spooky_array[i].move();
		if (i != spooky_array.length-1) {
			spooky_array[i].change_boss();
		}
		for (let k = 0; k < spooky_array.length; k++) {
			if (k != i) {
				if (spooky_array[i].position.dist(spooky_array[k].position) < 150) {
					spooky_array[i].contact_status(true);
				} else {
					spooky_array[i].contact_status(false);
				}
			}
		}

		spooky_array[i].show();

	}
}

function mousePressed() {

	spooky_array.push(new Spooky(
		createVector(mouseX, mouseY),
		character_count,
		createVector(random(-4, 4), random(-5, 5))
		)
	)

	if (character_count == 3) {
		character_count = 0;
	}

	character_count++;
}