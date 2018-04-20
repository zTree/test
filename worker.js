(function() {
  onmessage = function(event) {
  let value = event.data;
  value.forEach((v, index) => {
    value[index] = v+1;
  });
  postMessage({
    value: value
  });
};

})();