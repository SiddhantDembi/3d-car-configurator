import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ColorOption {
  color: string;
  name: string;
}

const carColors: ColorOption[] = [
  { color: "#000000", name: "black" },
  { color: "#FFFFFF", name: "white" },
  { color: "#FF0000", name: "red" },
  { color: "#0000FF", name: "blue" },
  { color: "#FFFF00", name: "yellow" },
];

const steeringColors: ColorOption[] = [
  { color: "#000000", name: "black" },
  { color: "#FFFFFF", name: "white" },
  { color: "#FF0000", name: "red" },
];

const glassColors: ColorOption[] = [
  { color: "#000000", name: "tinted" },
  { color: "#FFFFFF", name: "transparent" },
];

const wheelColors: ColorOption[] = [
  { color: "#000000", name: "black" },
  { color: "#FFFFFF", name: "white" },
  { color: "#FF0000", name: "red" },
];

const backlightColors: ColorOption[] = [
  { color: "#000000", name: "black" },
  { color: "#FFFFFF", name: "white" },
  { color: "#FF0000", name: "red" },
  { color: "#0000FF", name: "blue" },
  { color: "#FFFF00", name: "yellow" },
];

const tailColors: ColorOption[] = [
  { color: "#000000", name: "black" },
  { color: "#FFFFFF", name: "white" },
  { color: "#FF0000", name: "red" },
  { color: "#0000FF", name: "blue" },
  { color: "#FFFF00", name: "yellow" },
];

interface CustomizationContextProps {
  carColors: ColorOption[];
  steeringColors: ColorOption[];
  glassColors: ColorOption[];
  wheelColors: ColorOption[];
  backlightColors: ColorOption[];
  tailColors: ColorOption[];
  bodyColor: ColorOption;
  setBodyColor: Dispatch<SetStateAction<ColorOption>>;
  glassColor: ColorOption;
  setGlassColor: Dispatch<SetStateAction<ColorOption>>;
  steeringWheelColor: ColorOption;
  setSteeringWheelColor: Dispatch<SetStateAction<ColorOption>>;
  tireColor: ColorOption;
  setTireColor: Dispatch<SetStateAction<ColorOption>>;
  leatherColor: ColorOption;
  setLeatherColor: Dispatch<SetStateAction<ColorOption>>;
  interiorColor: ColorOption;
  setInteriorColor: Dispatch<SetStateAction<ColorOption>>;
  showTires: boolean;
  setShowTires: Dispatch<SetStateAction<boolean>>;
  showTail: boolean;
  setShowTail: Dispatch<SetStateAction<boolean>>;
  brakeDesign: number;
  setBrakeDesign: Dispatch<SetStateAction<number>>;
  backlightColor: ColorOption;
  setBacklightColor: Dispatch<SetStateAction<ColorOption>>;
  tailColor: ColorOption;
  setTailColor: Dispatch<SetStateAction<ColorOption>>;
}

const CustomizationContext = createContext<CustomizationContextProps | undefined>(undefined);

interface CustomizationProviderProps {
  children: ReactNode;
}

export const CustomizationProvider: React.FC<CustomizationProviderProps> = ({ children }) => {
  const [bodyColor, setBodyColor] = useState<ColorOption>(carColors[0]);
  const [glassColor, setGlassColor] = useState<ColorOption>(glassColors[0]);
  const [steeringWheelColor, setSteeringWheelColor] = useState<ColorOption>(steeringColors[0]);
  const [tireColor, setTireColor] = useState<ColorOption>(wheelColors[0]);
  const [leatherColor, setLeatherColor] = useState<ColorOption>(carColors[0]);
  const [interiorColor, setInteriorColor] = useState<ColorOption>(carColors[0]);
  const [showTires, setShowTires] = useState<boolean>(true);
  const [showTail, setShowTail] = useState<boolean>(true);
  const [brakeDesign, setBrakeDesign] = useState<number>(1);
  const [backlightColor, setBacklightColor] = useState<ColorOption>(backlightColors[0]);
  const [tailColor, setTailColor] = useState<ColorOption>(tailColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        carColors,
        steeringColors,
        glassColors,
        wheelColors,
        backlightColors,
        tailColors,
        bodyColor, setBodyColor,
        glassColor, setGlassColor,
        steeringWheelColor, setSteeringWheelColor,
        tireColor, setTireColor,
        leatherColor, setLeatherColor,
        interiorColor, setInteriorColor,
        showTires, setShowTires,
        showTail, setShowTail,
        brakeDesign, setBrakeDesign,
        backlightColor, setBacklightColor,
        tailColor, setTailColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = (): CustomizationContextProps => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error("useCustomization must be used within a CustomizationProvider");
  }
  return context;
};