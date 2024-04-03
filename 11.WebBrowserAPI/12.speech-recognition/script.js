// for older browser
const SpeechRecognition = window.SpeechRecongnition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
// rec.lang = 'ko';
rec.continuous = true; //it listens and then it stops



rec.onresult = function (e) {
  const acceptedColors = ['red', 'blue', 'green', 'yellow', 'pink', 'brown', 'purple', 'orange', 'black', 'white']

  for (let i = e.resultIndex; i < e.results.length; i++){
    const script = e.results[i][0].transcript.toLowerCase().trim();
    
    // document.body.style.backgroundColor = script;

    if (acceptedColors.includes(script)){
        document.body.style.backgroundColor = script;
    } else {
        alert('Please say a color');
    }
  }
};

rec.start();



