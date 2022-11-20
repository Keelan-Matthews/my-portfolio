import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { WaveMaterial } from '../animations/Shader'

extend({ WaveMaterial })

const HeroWave = () => {

    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.uTime = clock.getElapsedTime()
    });

    const [image] = useLoader(THREE.TextureLoader, [`/images/painting.webp`]);

    return (
        <mesh>
            <planeGeometry args={[0.4, 0.6, 10, 10]} />
            <waveMaterial ref={ref} uTexture={image} />
        </mesh>
    );
}

export default function WaveImage() {
    return (
        <Canvas camera={{ fov: 10 }}>
            <Suspense fallback={null}>
                <HeroWave />
            </Suspense>
        </Canvas>
    )
}
