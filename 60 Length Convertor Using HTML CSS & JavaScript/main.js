function cmConverter() {
  document.converter.inch.value = document.converter.cm.value / 2.54;
  document.converter.feet.value = document.converter.cm.value / 30.48;
}
function inchConverter() {
  document.converter.cm.value = document.converter.inch.value * 2.54;
  document.converter.feet.value = document.converter.inch.value / 12;
}
function feetConverter() {
  document.converter.cm.value = document.converter.feet.value * 30.48;
  document.converter.inch.value = document.converter.feet.value * 12;
}
