    var camera, scene, renderer;
    var effect, controls;
    var element, container;

    var clock = new THREE.Clock();

    init();
    animate();

    function init() {
      renderer = new THREE.WebGLRenderer();
      element = renderer.domElement;
      container = document.getElementById('example');
      container.appendChild(element);

      effect = new THREE.StereoEffect(renderer);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
      camera.position.set(0, 10, 0);
      scene.add(camera);



      controls = new THREE.OrbitControls(camera, element);
      controls.rotateUp(Math.PI / 4);
      controls.target.set(
        camera.position.x + 0.1,
        camera.position.y,
        camera.position.z
      );
      controls.noZoom = true;
      controls.noPan = true;

      function setOrientationControls(e) {
        if (!e.alpha) {
          return;
        }

        controls = new THREE.DeviceOrientationControls(camera, true);
        controls.connect();
        controls.update();

        element.addEventListener('click', fullscreen, false);

        window.removeEventListener('deviceorientation', setOrientationControls, true);
      }
      window.addEventListener('deviceorientation', setOrientationControls, true);

      // LIGHTING EFFECT - VALUES CHANGE BRIGHTNESS, HUE, ECT....
      var light = new THREE.HemisphereLight(0x777777, 0x000009, 0.7);
      
      scene.add(light);

      // CAMERA POSITIONS ON MATRIX
      camera.position.z = 10;
      camera.position.y = -10;
      camera.position.x = 10;

      // TEXTURE OF THE FLOOR - (MUST HAVE SPECIFIC IMAGE SIZE)
      var texture = THREE.ImageUtils.loadTexture(
        'textures/patterns/Mosaic-Tiles.png'
      );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      // THREE.Vector2(50, 50) DICTATES THE SHAPE OF FLOOR 'TILES'
      texture.repeat = new THREE.Vector2(50, 50);
      texture.anisotropy = renderer.getMaxAnisotropy();

      var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 30,
        shading: THREE.NoShading,
        map: texture
      });

      // SIZE OF THE GEOMETRIC PLANE - RENDER GEOMETRIC OBJECTS
      var geometry = new THREE.PlaneGeometry(1000, 1000);

      var mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      // GEOMETRIC DIMENSIONS OF NEW CUBE OBJECT
      var geometry2 = new THREE.BoxGeometry(10,10,10);
      // TEXTURE OF OBJECT
      var material2 = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      // FUSING TOGETHER THE TEXTURE WITH THE OBJECT
      var cube = new THREE.Mesh(geometry2, material2);
      // RENDERING THE OBJECT
      scene.add(cube);

      // ADD SPINNING ANIMATION TO CUBE OBJECT
      var render = function() {
        requestAnimationFrame( render );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1; 
        
        renderer.render(scene, camera);       
      }

      render();

      window.addEventListener('resize', resize, false);
      setTimeout(resize, 1);
    }

    function resize() {
      var width = container.offsetWidth;
      var height = container.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      effect.setSize(width, height);
    }

    function update(dt) {
      resize();

      camera.updateProjectionMatrix();

      controls.update(dt);
    }

    function render(dt) {
      effect.render(scene, camera);
    }

    function animate(t) {
      requestAnimationFrame(animate);

      update(clock.getDelta());
      render(clock.getDelta());
    }

    function fullscreen() {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
    }