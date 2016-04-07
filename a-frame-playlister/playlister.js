  document.querySelector('#hexagon').addEventListener('mouseenter', function () {
    this.setAttribute('material', 'color', 'blue');
  });
  
  document.querySelector('#hexagon').addEventListener('mouseleave', function () {
    this.setAttribute('material', 'color', 'green');
  });