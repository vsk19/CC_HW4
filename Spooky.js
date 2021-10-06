class Spooky {

	constructor(position, character, speed) {
		this.position = position
		this.character = character;
		this.is_boss = true;
		this.in_contact = false;
		this.speed = speed
		
	}

    move() {
		this.position.add(this.speed);

		if (this.position.x < 0 || this.position.x > width) {
			this.speed.x *= -1;
		}
		if (this.position.y < 0 || this.position.y > height) {
			this.speed.y *= -1;
		}
	}
	
	show() {

        let img = null;
        let img_inverted = null;

		if (this.character == 1) {
			img = pumpkin;
            img_inverted = pumpkin_inverted;
		} if (this.character == 2) {
			img = ghost;
            img_inverted = ghost_inverted;
		} if (this.character == 3) {
			img = candy;
            img_inverted = candy_inverted;
		}

		if (this.is_boss == true) {
			image(red_glow, this.position.x, this.position.y);
			image(img, this.position.x, this.position.y);
			// if (this.is_contact == true) {
			// 	push();
			// 	translate(random(-10,5),random(-5,5));
			// 	image(img_inverted, this.position.x, this.position.y);
			// 	pop();
			// } 
			// if (this.is_contact == false) {
			// 	image(img, this.position.x, this.position.y);
			// } 
		} else {
			
			print(this.in_contact);
			if (this.in_contact == true) {
				push();
				translate(random(-10,5),random(-5,5));
				image(img_inverted, this.position.x, this.position.y);
				pop();
			} else {
				image(img, this.position.x, this.position.y);
			}
		}

	}

    // pass in whether or not object is in contact with another object
   	contact_status(is_in_contact) {
        this.in_contact = is_in_contact;
    }

	change_boss() {
		this.is_boss = false;
	}

}