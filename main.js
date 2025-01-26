var audio = document.getElementById('myAudio');
var answer = document.getElementById('answer');
function c() {
  answer.value = '';
  audio.play();
}
answer.addEventListener('input',function(){
  audio.play();
})
function i() {
  audio.play();
  let answerlength = answer.value.length
  let answer2 = answer.value.slice(0, answerlength - 1);
  let answer3 = answer.value.slice(0, -1);
  answer.value = answer3;
}
function e() {
  audio.play();
  answer.value = answer.value.replace('^','**');
  answer.value = answer.value.replace('^','**');
  answer.value = answer.value.replace('^','**');
  answer.value = answer.value.replace('^','**');
  answer.value = answer.value.replace('^','**');
  answer.value = answer.value.replace('^','**');
  answer.value = answer.value.replace('×','*');
  answer.value = answer.value.replace('÷','/');
  answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
answer.value = answer.value.replace('×', '*');
answer.value = answer.value.replace('÷', '/');
  answer.value = eval(answer.value);
}
function p() {
  audio.play();
  answer.value = answer.value + '+';
}
function m() {
  audio.play();
  answer.value = answer.value + '-';
}
function k() {
  audio.play();
  answer.value = answer.value + '×';
}
function san() {
  audio.play();
  answer.value = (answer.value) ** (1/3);
}
function w() {
  audio.play();
  answer.value = answer.value + '÷';
}
function o() {
  audio.play();
  answer.value = answer.value + '1';
}
function tw() {
  audio.play();
  answer.value = answer.value + '2';
}
function th() {
  audio.play();
  answer.value = answer.value + '3';
}
function f() {
  audio.play();
  answer.value = answer.value + '4';
}
function fi() {
  audio.play();
  answer.value = answer.value + '5';
}
function si() {
  audio.play();
  answer.value = answer.value + '6';
}
function se() {
  audio.play();
  answer.value = answer.value + '7';
}
function ei() {
  audio.play();
  answer.value = answer.value + '8';
}
function ni() {
  audio.play();
  answer.value = answer.value + '9';
}
function ze() {
  audio.play();
  answer.value = answer.value + '0';
}
function t() {
  audio.play();
  answer.value = answer.value + '.';
}
function r() {
  audio.play();
  answer.value = Math.sqrt(answer.value);
}



function ka() {
  audio.play();
  answer.value = answer.value + '(';
}
function kaa() {
  audio.play();
  answer.value = answer.value + ')';
}
function na() {
  audio.play();
  answer.value = answer.value + '{';
}
function naa() {
  audio.play();
  answer.value = answer.value + '}';
}

function paa() {
  audio.play();
  answer.value = answer.value + '%';
}
function jo() {
  audio.play();
  answer.value = answer.value + '^';
}
function pai() {
  audio.play();
  answer.value = answer.value + '3.14';
}
function nei() {
  audio.play();
  answer.value = answer.value + '2.71';
}
