'use client';
import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";
import { CustomizationProvider } from "@/contexts/Customization";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <CustomizationProvider>
      <div className="w-screen h-screen select-none flex flex-col md:flex-row">
        <div className="w-full h-1/2 md:h-full md:flex-1">
          <Canvas dpr={[1, 2]}>
            <color attach="background" args={["#FFFFFF"]} />
            <Experience />
          </Canvas>
        </div>
        <div className="w-full h-1/2 md:h-full md:w-[300px]">
          <Configurator />
        </div>
      </div>
    </CustomizationProvider>
  );
}