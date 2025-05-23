class pixelated {
  constructor(x, y, w , h, textsize) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.textsize=textsize
  }

  display() {
//black bg
    fill(0);
    rect(this.x-5, this.y - 5, this.w + 10, this.h + 10);
    rect(this.x-10, this.y, this.w + 20, this.h ); //2nd rect
    rect(this.x-15, this.y+5, this.w + 30, this.h-10); //smallest rect

    
    // SHADOW (dark blue)
    noStroke()
    fill(0, 74, 159);
  
    rect(this.x-5, this.y+5, this.w + 10, this.h-10 );

    rect(this.x + this.w, this.y + 4, 4, this.h - 4); // right

    // BASE BUTTON COLOR
    // fill(0, 180, 255); // light blue
    // rect(this.x, this.y, this.w, this.h);

    // TEXT
    fill(255);
    textFont('Press Start 2P'); // use pixel font for best result
    textSize(20);
    textAlign(CENTER, CENTER);
    text("START", this.x + this.w / 2, this.y + this.h / 2 + 2);
  }
}
