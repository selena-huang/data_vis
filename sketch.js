function setup() {
	createCanvas(400, 400);
  }
  
  function draw() {
	  background(240);
	
	  let h = map(hour(), 0, 24, 0, 255, true);
	  fill(0, h, 255 - h, 140);
	  let rh = map (hour(), 0, 24, PI + HALF_PI, TWO_PI, true);
	  arc(0, 400, 400, 400, PI + HALF_PI, rh, PIE);
	
	
	  let m = map(minute(), 0, 60, 0, 255, true);
	  fill(255, 255 - m, 255 - m, 110);
	  let rm = map (minute(), 0, 60, 0, HALF_PI, true);
	  arc(0, 0, 600, 600, 0, rm, PIE);
	
	  let s = map(second(), 0, 60, 0, 240, true);
	  fill(255 - s, 255 - s, 255, 80);
	  let rs = map(second(), 0, 60, HALF_PI, PI, true);
	  arc(400, 0, 800, 800, HALF_PI, rs, PIE);
  }
