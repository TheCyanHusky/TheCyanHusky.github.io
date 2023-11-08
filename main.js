import * as THREE from './three.module.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1, 1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(10);

const geoPog = new THREE.TorusGeometry(15.5, 1, 15.5, 12)

const texturePog = new THREE.TextureLoader().load('RainbowHor.png')

const texturePog1 = new THREE.TextureLoader().load('eevee.jpg')

const matPog = new THREE.MeshStandardMaterial( {
  color: 0xffffff, 
  wireframe: false,
  map: texturePog
} )



const matPog1 = new THREE.MeshStandardMaterial( {
  color: 0xffffff, 
  wireframe: false,
  map: texturePog1
} )

const geoPog1 = new THREE.TorusGeometry(10.5, 1, 10.5, 10)

const geoPog2 = new THREE.CylinderGeometry(5.5, 5.5, 2.25, 99)

const geoPog3 = new THREE.TorusGeometry(20.5, 1, 20.5, 14)

const geoPog4 = new THREE.TorusGeometry(25.5, 1, 25.5, 16)

const geoPog5 = new THREE.TorusGeometry(30.5, 1, 30.5, 18)

const pog = new THREE.Mesh( geoPog, matPog)
pog.rotation.x = 0;
pog.position.set(0,0,10)

const pog1 = new THREE.Mesh( geoPog1, matPog)
pog.rotation.x = 0;
pog1.position.set(0,0,5)

const pog2 = new THREE.Mesh( geoPog2, matPog1)
pog.rotation.y = 0;
pog2.position.set(0,0,0)

const pog3 = new THREE.Mesh( geoPog3, matPog)
pog3.position.set(0,0,15)

const pog4 = new THREE.Mesh( geoPog4, matPog)
pog4.position.set(0,0,20)

const pog5 = new THREE.Mesh( geoPog5, matPog)
pog5.position.set(0,0,24)

const pointlight = new THREE.PointLight(0xffffff, 1000, 100)
pointlight.position.set(0, 0, 50)

const ambientlight = new THREE.AmbientLight(0xffffff, 0)

//Lights
scene.add(pog);

scene.add(pog1);

scene.add(pog2);

scene.add(pog3);

scene.add(pog4);

scene.add(pog5);

scene.add(pointlight)

scene.add(ambientlight)

//helpers
const lightHelper = new THREE.PointLightHelper(pointlight)

const gridHelper = new THREE.GridHelper(200, 50)

const axesHelper = new THREE.AxesHelper(20, 20, 20)

// scene.add(lightHelper, gridHelper, axesHelper)


pog2.rotation.y += 315;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  pog.rotation.x += .00;
pog.rotation.y -= .00;
pog.rotation.z += .04;

pog1.rotation.z -= .05;

pog2.rotation.x += .06;

pog3.rotation.z -= .03;
pog3.rotation.y -= .00;

pog4.rotation.z += .02;
pog4.rotation.y -= .00;

pog5.rotation.x -= .00;
pog5.rotation.z -= .01;

camera.position.z += .03
}



function animate(time) {
  requestAnimationFrame( animate );

  document.body.onscroll = moveCamera;

  renderer.render( scene, camera)
}

animate()