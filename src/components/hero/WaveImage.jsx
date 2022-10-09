import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro' 
import * as THREE from 'three'

const WaveMaterial = shaderMaterial(
    // Uniform
    { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0), uTexture: new THREE.Texture() },
    // Vertex Shader
    glsl`
        precision mediump float;
        varying vec2 vUv;
        varying float vWave;
        uniform float uTime;

        #pragma glslify: snoise3 = require('glsl-noise/simplex/3d');

        void main() {
            vUv = uv;
            vec3 pos = position;
            float noiseFreq = 5.0;
            float noiseAmp = 0.2;
            vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
            pos.z += snoise3(noisePos) * noiseAmp;
            vWave = pos.z;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    // Fragment Shader 
    glsl`
        precision mediump float;
        uniform vec3 uColor;
        uniform float uTime;
        varying vec2 vUv;
        varying float vWave;
        uniform sampler2D uTexture;

        void main() {
            float wave = vWave * 0.08;
            vec3 texture = texture2D(uTexture, vUv + wave).rgb;
            gl_FragColor = vec4(texture, 1.0);
        }
    `
);

extend({ WaveMaterial });

const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

    const [image] = useLoader(THREE.TextureLoader, ['/images/painting.jpg']);

    return (
        <mesh>
            <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
            <waveMaterial ref={ref} uColor='hotpink' uTexture={image} />
        </mesh>
    );
}

export default function WaveImage() {
  return (
    <Canvas camera={{ fov: 10 }}>
        <Suspense fallback={null}>
            <Wave />
        </Suspense>
    </Canvas>
  )
}
