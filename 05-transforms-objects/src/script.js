import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 1.5;
// mesh.position.y = -0.6;
// mesh.position.z = -3;

// const x = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(x);

mesh.position.set(1.5, -0.4, -2);
scene.add(mesh);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Scale
mesh.scale.set(2, 0.2, 0.5);

// Rotation

mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI / 3;
mesh.rotation.x = Math.PI / 6;
// mesh.rotation.z = Math.PI / 4;

/**
 * Sizes
 */
const sizes = {
  width: 620,
  height: 600,
};

/** Camera */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.y = 1;
camera.position.x = 1;
camera.position.z = 3;
scene.add(camera);

/** Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

mesh.rotation.z = Math.PI / 4;
renderer.render(scene, camera);
