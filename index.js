
const tf = require('@tensorflow/tfjs-node');
let model;
window.onload = async () => {
  model = await tf.loadLayersModel('./model.h5');
};

async function runPrediction() {
  const title = document.getElementById('title');
  const length = document.getElementById('length');
  const fuzz = document.getElementById('fuzz');
  
  const parsedFuzz = tf.tensor2d([[parseFloat(fuzz.value)]]);
  const prediction = await predict(model, title, length, fuzz);
  
  prediction.data().then(data => {
    document.getElementById('prediction').innerText = data;
  });
}