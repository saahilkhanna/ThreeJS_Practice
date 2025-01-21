import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {
  const meshref = useRef();

  useFrame(() => {
    if (meshref.current) {
      meshref.current.rotation.x += 0.01;
      meshref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshref}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#white" emissive="gray" />
    </mesh>
  );
};

const App = () => {
  return (
    <>
    <div style={{
        position: 'absolute',
        top: '5%',
        left: '20%',
        fontSize: '2rem',
        color: 'white',
        zIndex: 10,  
        textAlign: 'center'
      }}>
      My Cool 3D Cube that spins and Sparkles, this time coded in REACT!
    </div>

    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <OrbitControls enableZoom enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={"yellow"} />
      <color attach="background" args={['black']} />
      <RotatingCube />
      <Sparkles count={500} size={6} speed={0.002} color={"pink"} />
    </Canvas>

    </>
  );
};

export default App;
