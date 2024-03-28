// to start the server: npm run dev

import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addCapsule, addCone, addSphere, addStandardMesh } from './addMeshes'
import { addLight } from './lights'

const scene = new THREE.Scene()
const render = new THREE.WebGLRenderer({antialias: true})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)
camera.position.set(0, 0, 5)

let meshes = {};

init()
function init(){
  render.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(render.domElement)

  // MESHES
  // const geometry = new THREE.BoxGeometry(1, 1, 1)
  // const material = new THREE.MeshBasicMaterial({color: 0xffff00})
  // const mesh = new THREE.Mesh(geometry, material)
  // mesh.position.set(0, 0, -5)
  // meshes.default = mesh
  meshes.default = addBoilerPlateMesh()
  meshes.standart = addStandardMesh()
  meshes.sphere = addSphere()
  meshes.capsule = addCapsule()
  meshes.cone = addCone()

  // LIGHTS
  meshes.defaultLight = addLight()

  // ADD
  scene.add(meshes.default)
  scene.add(meshes.standart)
  scene.add(meshes.sphere)
  scene.add(meshes.capsule)
  scene.add(meshes.cone)
  scene.add(meshes.defaultLight)

  resize()
  animate()
}

function resize(){
  window.addEventListener('resize', ()=>{
    render.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate(){
  requestAnimationFrame(animate)
  // meshes.default.position.x += 0.01
  // meshes.default.position.y += 0.01
  meshes.default.rotation.x += 0.01
  meshes.default.rotation.y += 0.01
  meshes.default.rotation.z += 0.01

  meshes.standart.rotation.x += 0.01
  meshes.standart.rotation.y += 0.01
  meshes.standart.rotation.z += 0.01

  render.render(scene, camera)
}