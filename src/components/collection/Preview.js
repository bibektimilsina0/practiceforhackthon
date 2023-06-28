import * as THREE from 'three';
import video from '../../image/mountain.mp4'
import { Link,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../vrapp.css'
import './preview.css'
import FullView from './Fullview';
function Preview({ vidsource, id,rid, data}) {

    useEffect(() => {
        const scene = new THREE.Scene();
        // const width = { vwidth }
        // const height = { vheight }
        // const width = window.innerWidth / 4;
        // const height = window.innerHeight / 4;
        const width=300;
        const height=300;
        // const render = document.querySelector('.render');
        // const width = render.clientWidth ;
        // const height = render.clientHeight ;
        const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);

        // create a renderer
        const render = document.querySelector(`#${rid}`)
        const canvas = document.querySelector(`#${id}`);
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(width, height);


        render.appendChild(renderer.domElement);

        // create a sphere geometry
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const videoElement = document.createElement('video');
        // videoElement.src = video;
        videoElement.src = vidsource;

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
        var playButton = document.querySelector('.button');

        // Step 9: Add event listeners to controls
        // playButton.addEventListener('click', function () {
        //     if (videoElement.paused) {
        //         videoElement.play();
        //     } else {
        //         videoElement.pause();
        //     }
        // });



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
        <div className="rendercol flex flex-col w-1/2" id='rendercol ' >
            <div className='flex' id='rendercol1'>
            <canvas className='pvid mr-32 ' id={id} ></canvas>
            </div>
          
            <div className='flex mt-8' id='rendercol2'>
             <canvas className='pvid mr-32 ' id={id}></canvas>
            </div>
        <div>
            <button  ><i className=" button fa-solid fa-circle-play fa-fade fa-2xl "style={{color:"#d3d9d8"}}></i></button>
            </div>
            
        </div>

    )
}
export default Preview;