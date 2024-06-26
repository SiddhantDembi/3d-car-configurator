import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";
import * as THREE from "three";
import { GroupProps } from "@react-three/fiber";

const Car: React.FC<GroupProps> = (props) => {
  const { scene } = useGLTF("./models/final_car.glb");
  const {
    bodyColor,
    glassColor,
    steeringWheelColor,
    tireColor,
    leatherColor,
    interiorColor,
    showTires,
    showTail,
    brakeDesign,
    backlightColor,
    tailColor,
  } = useCustomization();

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: bodyColor.color,
        metalness: 0.5,
        roughness: 0.2,
      }),
    [bodyColor]
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: glassColor.color,
        transparent: true,
        opacity: 0.5,
      }),
    [glassColor]
  );

  const steeringWheelMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: steeringWheelColor.color }),
    [steeringWheelColor]
  );

  const tireMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: tireColor.color }),
    [tireColor]
  );

  const leatherMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: leatherColor.color }),
    [leatherColor]
  );

  const interiorMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: interiorColor.color }),
    [interiorColor]
  );

  const backlightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: backlightColor.color }),
    [backlightColor]
  );

  const tailMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: tailColor.color }),
    [tailColor]
  );

  if (scene) {
    scene.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.name === "body") {
          mesh.material = bodyMaterial;
        } else if (mesh.name === "glass") {
          mesh.material = glassMaterial;
        } else if (mesh.name.startsWith("steering_")) {
          mesh.material = steeringWheelMaterial;
        } else if (mesh.name.startsWith("tire")) {
          mesh.visible = showTires;
          if (showTires) {
            mesh.material = tireMaterial;
          }
        } else if (mesh.name.includes("tail")) {
          mesh.visible = showTail;
          if (showTail) {
            mesh.material = tailMaterial;
          }
        } else if (mesh.name.includes("leather")) {
          mesh.material = leatherMaterial;
        } else if (mesh.name.includes("brakes")) {
          mesh.material = backlightMaterial;
        } else if (mesh.name.includes("interior_light")) {
          mesh.material = interiorMaterial;
        } else if (mesh.name.startsWith("brake")) {
          if (brakeDesign === 1) {
            mesh.visible = !mesh.name.startsWith("brake2");
          } else if (brakeDesign === 2) {
            mesh.visible = mesh.name.startsWith("brake2");
          }
        }
      }
    });
  }

  return (
    <group {...props} dispose={null}>
      {scene && <primitive object={scene} />}
    </group>
  );
};

useGLTF.preload("./models/final_car.glb");

export default Car;
