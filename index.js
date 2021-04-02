let osc, osc2, playing, freq, amp;

var dialFreq=[
    [941,1336],
    [697,1209],
    [697,1336],
    [697,1477],
    [770,1209],
    [770,1336],
    [770,1477],
    [852,1209],
    [852,1336],
    [852,1477]
]
var dial="056826560049";
var dialArr;
var dialPos=0;
var dialLength=10;
var Frame=0;
var Playing=true;

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  osc2 = new p5.Oscillator('sine');

  dialArr=new Array(dial.length);
  for(var i=0;i<dial.length;i++){
      dialArr[i]=Number(dial.charAt(i));
  }

//   for(var i=0;i<dialArr.length;i++){
//         osc.freq(dialFreq[dialArr[i]][0],i*dialLength);
//         osc2.freq(dialFreq[dialArr[i]][1],i*dialLength);
//         osc.amp(1,dialLength,i*dialLength);
//         osc2.amp(1,dialLength,i*dialLength);
//   }
osc.amp(1);
osc.amp(1);
  osc.start();
  osc2.start();
  console.log(dialArr);
  console.log(Number(dialFreq[0][0]));
  playing=true;
//   osc2.start();
}

function draw() {
  background(220);

//   text('tap to play', 20, 20);
//   text('freq: ' + freq, 20, 40);
//   text('amp: ' + amp, 20, 60);

if(playing){
    Frame++;
    if(Frame==dialLength-dialLength*0.2){
        osc.stop();
        osc2.stop();
    }

    if(Frame>dialLength){
        Frame=0;
        osc.start();
        osc2.start();
        Math.min(dialPos++,dialArr.length);
        var a=Math.min(Number(dialArr[dialPos]),dialFreq.length);
        console.log(a);
        
        osc.freq(dialFreq[a][0]);
        osc2.freq(dialFreq[a][1]);
        if(dialPos+1>=dialArr.length){
            playing=false;
            osc.stop();
            osc2.stop();
        }
    }
}

//   if (Playing) {
//     // smooth the transitions by 0.1 seconds
//     osc.freq(freq, 0.1);
//     osc.amp(amp, 0.1);
//   }
}

function playOscillator() {
    osc.amp(0);
    osc2.amp(0);
  playing = false;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  //osc.amp(0, 0.5);
  playing = false;
}