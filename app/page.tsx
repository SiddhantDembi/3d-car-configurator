'use client';
import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";
import { CustomizationProvider } from "@/contexts/Customization";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <CustomizationProvider>
      <div className="w-screen h-screen select-none flex justify-between">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#FFFFFF"]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}
