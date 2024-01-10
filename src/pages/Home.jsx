
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Rabbit from '../models/rabbit';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';


const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(0)
    const adjustRabbitForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -1.5, -43];
        let rotation = [-0.19, 0.5, 0]
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [11, 11, 11];
        }
        return [screenPosition, screenScale, rotation];
    };
    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4]
        }
        return [screenPosition, screenScale];
    };
    const [rabbitPosition, rabbitScale, rabbitRotation] = adjustRabbitForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize()

    return (
        <section className='w-full h-screen relative'>
            {currentStage !== null && currentStage !== 0 && (
                <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                    <HomeInfo currentStage={currentStage} />
                </div>
            )}
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 8, 9]} intensity={5} />
                    <ambientLight intensity={0.5} />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
                    <Sky isRotating={isRotating} />
                    <Rabbit
                        position={rabbitPosition}
                        scale={rabbitScale}
                        rotation={rabbitRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage} />

                    <Plane
                        planeScale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
