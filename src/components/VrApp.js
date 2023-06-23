import * as THREE from 'three';
import '../vrapp.css'
import video from '../image/mountain.mp4'
import { useEffect } from 'react';
import '../vrapp.css'
function VrApp({ vrwidth, vrheight }) {

    useEffect(() => {
        const scene = new THREE.Scene();
        // const width = { vrwidth }
        // const height = { vrheight }
        const width = window.innerWidth ;
        const height = window.innerHeight / 1.6;
        // const render = document.querySelector('.render');
        // const width = render.clientWidth ;
        // const height = render.clientHeight ;
        const camera = new THREE.PerspectiveCamera(75, width/height, 1, 100);

        // create a renderer
        const canvas = document.querySelector('#three');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(width, height);

    
        document.body.appendChild(renderer.domElement);

        // create a sphere geometry
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const videoElement = document.createElement('video');
        videoElement.src = video;
        //  videoElement.src = 'https://s.bepro11.com/vr-video-sample.mp4';
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.playsInline = true;
        videoElement.crossOrigin = "anonymous";
        videoElement.load();
        const texture = new THREE.VideoTexture(videoElement);


        // create a material from the texture
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // need to use back side - surface of the sphere is facing outside but we put the camera inside of the sphere
        material.side = THREE.BackSide;

        // create a mesh and add to the scene
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer.setAnimationLoop(() => renderer.render(scene, camera));
        //video control
        var playButton = document.createElement('button');
        playButton.textContent ='play';

        var pauseButton = document.createElement('button');
        pauseButton.textContent = 'Pause';

        var seekBar = document.createElement('input');
        seekBar.type = 'range';

        // Step 9: Add event listeners to controls
        playButton.addEventListener('click', function () {
            videoElement.play();
        });

        pauseButton.addEventListener('click', function () {
            videoElement.pause();
        });

        seekBar.addEventListener('input', function () {
            var time = videoElement.duration * (seekBar.value / 100);
            videoElement.currentTime = time;
        });
        // Step 6: Attach controls to DOM elements
  var container = document.getElementById('control');

  container.appendChild(playButton);
  container.appendChild(pauseButton);
  container.appendChild(seekBar);
    
        // zoom in / out
        const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
        renderer.domElement.addEventListener('wheel', e => {
            camera.fov = clamp(camera.fov + e.deltaY / 10, 10, 120);
            // need to call this function after changing most of properties in PerspectiveCamera
            camera.updateProjectionMatrix();
        });

        // rotate camera
        let mouseDown = false;
        renderer.domElement.addEventListener('mousedown', e => {
            if (e.button === 0) mouseDown = true;
        });

        window.addEventListener('mouseup', e => {
            if (e.button === 0) mouseDown = false;
        });

        window.addEventListener('mousemove', e => {
            if (!mouseDown) return;

            const { movementX, movementY } = e;

            // rotateX: rotate vertically since x-axis is horizontal
            const rotateX = movementY / 100;
            const rotateY = movementX / 100;

            camera.rotateX(rotateX);
            camera.rotateY(rotateY);
        });
    }, [])

    return (
        <div  className="render" >
            <canvas id='three'></canvas>
        </div>

    )
}
export default VrApp;