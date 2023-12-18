import * as THREE from 'three';

//Starting postion of the images from the top
const STARTY = 10;

//create a new scene
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load("img/portfolioBackdrop.png")

//create amd position the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = STARTY;
camera.position.z = 30;

// creata list of images in the img folder
let imgList = [
    "Quarter12023-2024.png",
    "Quarter42022-2023.png"
]

// add every listed image as a plane mesh with texture to scene
for (const image in imgList) {
    console.log(image);

    //every mesh has a geometry, texture, and material
    const geometry = new THREE.PlaneGeometry(25, 15);
    const texture = new THREE.TextureLoader().load('img/' + imgList[image]);
    const material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            map: texture //add the texture image here
        }
    );
    const plane = new THREE.Mesh(geometry, material);
    //adds new plane to scene
    plane.position.x = -10;
    scene.add(plane);
}

// move the camera with the scroll bar
function moveCamera() {
    const top = document.body.getBoundingClientRect().top;
    camera.position.y = STARTY + top * 0.05;
}

//add scrollbar event to move camera
document.body.onscroll = moveCamera;

// resize the threejs canvas with the window
//and adjust for phone sizes
function resizeWindow() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // adjust for phone or desktop size
    if (window.innerWidth <= 600) {
        camera.position.x = 0
        for (const child in scene.children) {
            scene.children[child].rotation.y = 0;
            scene.children[child].position.y = child * -50
            scene.children[child].position.x = 0;
        }
    }
    else {
        camera.position.x = 0;
        for (const child in scene.children) {
            scene.children[child].rotation.y = 10 * (Math.PI / 180);
            scene.children[child].position.y = child * -40
            scene.children[child].position.x = -25;
        }

    }
}

// resize canvas on window resize
window.addEventListener('resize', resizeWindow, false);

// create render and attach to canvas
const renderer = new THREE.WebGLRenderer(
    { canvas: document.querySelector('#bg') }
);

//set render size and add it to the page
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animation loop (calls itself recursively)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// set initial canvas size
resizeWindow();

// start animation
animate();