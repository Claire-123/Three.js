import * as THREE from "three"

export function addBoilerPlateMesh(){
    const box = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-2, 0, 0)
    return boxMesh
}

export function addStandardMesh(){
    const box = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(2, 0, 0)
    return boxMesh
}

export function addSphere(){
    const sphere = new THREE.SphereGeometry(1, 1, 1)
    const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x0000ff})
    const sphereMesh = new THREE.Mesh(sphere, sphereMaterial)
    sphereMesh.position.set(0, 0, 0)
    return sphereMesh
}

export function addCapsule(){
    const capsule = new THREE.CapsuleGeometry(1, 1, 1)
    const capsuleMaterial = new THREE.MeshStandardMaterial({color: 0x0000f})
    const capsuleMesh = new THREE.Mesh(capsule, capsuleMaterial)
    capsuleMesh.position.set(0, 2, 0)
    return capsuleMesh
}

export function addCone(){
    const geometry = new THREE.ConeGeometry( 1, 3, 32 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const cone = new THREE.Mesh(geometry, material );
    cone.position.set(0, -2, 0)
    return sphereMesh
}