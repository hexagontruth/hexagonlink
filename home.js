let scene, camera, renderer, w, h;
init();

function init() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', resize);

    camera = new THREE.PerspectiveCamera(70, 1, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);

    cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    scene.add(cube);
    render();
}

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  renderer.setSize(w, h);
}
