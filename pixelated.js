class pixelbutton {
  constructor(x, y, w , h, textsize) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.textsize=textsize
  }

  isHovered() {
    return mouseX > this.x && mouseX < this.x + this.w &&
           mouseY > this.y && mouseY < this.y + this.h;
  }

  display() {
    let hover = this.isHovered();

    // Background
    fill(0, 200);
    rect(this.x-5, this.y - 5, this.w + 10, this.h + 10);
    rect(this.x-10, this.y, this.w + 20, this.h );
    rect(this.x-20, this.y+5, this.w + 40, this.h-10);

    // Shadow
    noStroke();
    fill(0, 74, 159, 240);
    rect(this.x-5, this.y+5, this.w + 10, this.h-10);
    rect(this.x-13, this.y+10 , this.w+25, this.h - 20);

    // Base Button (changes color on hover)
    if (hover) {
      fill(0, 220, 255, 255); // brighter blue
    } else {
      fill(0, 180, 255, 230);
    }
    rect(this.x+5, this.y+15, this.w-8, this.h-30);
    rect(this.x-7, this.y+23, this.w+15, this.h-45);
    rect(this.x+10, this.y+10, this.w-20, this.h-20);

    // Text
    fill(255);
    textFont('Press Start 2P');
    textSize(this.textsize);
    textAlign(CENTER, CENTER);
    text("START", this.x + this.w / 2, this.y + this.h / 2 + 2);
  }
}
