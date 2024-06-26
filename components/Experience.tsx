import { PresentationControls, Environment, Lightformer } from "@react-three/drei";
import Car from "./Car";

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 1.2, 0]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
        />
        <Car />
        <Environment preset="city" />
      </PresentationControls>
    </>
  );
};

export default Experience;
