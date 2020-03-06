let time = 0;
let wave = [];

let slider;
let iteractionsValue;

function setup() {
  
  let canvas = createCanvas(600,400);

  canvas.position(50,100);

  slider = createSlider(1,12,1);

  slider.position(700, 150);

  let title = createDiv('<h1>Fourier Series</h1>');
  title.position(50, 25);


  let iteractionsLabel = createDiv('<p>Number of iteractions</p>')
  iteractionsLabel.position(700,100);

  iteractionsValue = createDiv('<p>0</p>');
  iteractionsValue.position(850,135);

}

function draw() {

  iteractionsValue.html(`<p>${slider.value()}</p>`)

  background(0);
  translate(150,200);

  let x = 0;
  let y = 0;

  

  for(let i = 0; i < slider.value(); i++){

    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 50 * (4 /(n * Math.PI));

    x += radius * Math.cos(n * time);
    y += radius * Math.sin(n * time);

  

    stroke(255,100);
    noFill();
    ellipse(prevx,prevy,radius*2);

    fill(255);
    stroke(255);
    line(prevx,prevy,x,y);
    //ellipse(x,y,8);

    noFill();


    

  }


  wave.unshift(y);

  translate(200,0);
  line(x - 200,y,0,wave[0]);
  beginShape();
  for(let i = 0; i < wave.length; i++){

    vertex(i,wave[i]);

  }
  endShape();
  
  

  time += 0.05;

  if(wave.length > 300){

    wave.pop();

  }

}