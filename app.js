// Acceder a la cámara del usuario
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('videoElement');
        video.srcObject = stream;
    })
    .catch(function(error) {
        console.log("Error al acceder a la cámara: ", error);
    });

// Crear una escena de Three.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Crear un cubo 3D como ejemplo
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicionar la cámara
camera.position.z = 5;

// Animar la escena
function animate() {
    requestAnimationFrame(animate);
    
    // Rotar el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Renderizar la escena
    renderer.render(scene, camera);
}

animate();
