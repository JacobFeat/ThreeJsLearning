import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 3, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 0;
camera.position.x = 1.1;
camera.rotation.y = 0.4;
// camera.rotation.x = 0.1;
// camera.rotation.z = 0.1;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
