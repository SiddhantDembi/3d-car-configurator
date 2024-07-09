import React from "react";
import { useCustomization } from "../contexts/Customization";
import tireImage from "../public/assets/tire.png";
import notireImage from "../public/assets/notire.png";
import tailImage from "../public/assets/tail.png";
import notailImage from "../public/assets/notail.png";
import brake1Image from "../public/assets/brake1.png";
import brake2Image from "../public/assets/brake2.png";

const Configurator: React.FC = () => {
  const {
    carColors,
    steeringColors,
    glassColors,
    wheelColors,
    backlightColors,
    bodyColor, setBodyColor,
    glassColor, setGlassColor,
    steeringWheelColor, setSteeringWheelColor,
    tireColor, setTireColor,
    leatherColor, setLeatherColor,
    interiorColor, setInteriorColor,
    backlightColor, setBacklightColor,
    tailColor, setTailColor,
    setShowTires,
    setShowTail,
    setBrakeDesign
  } = useCustomization();

  const handleColorClick = (
    colorSetter: React.Dispatch<React.SetStateAction<{ color: string; name: string }>>,
    color: { color: string; name: string }
  ) => {
    colorSetter(color);
  };

  return (
    <div className="lg:fixed right-0 bottom-[10vh] w-[400px] flex flex-col gap-4 max-h-[83vh] overflow-y-auto items-center lg:items-start">
      <div className="uppercase font-bold font-poppins text-black">Body Color</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {carColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === bodyColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setBodyColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === bodyColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === bodyColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Seat Color</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {carColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === leatherColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setLeatherColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === leatherColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === leatherColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Interior Color</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {carColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === interiorColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setInteriorColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === interiorColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === interiorColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Backlight Color</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {backlightColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === backlightColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setBacklightColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === backlightColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === backlightColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Tail Wing Colour</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {carColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === tailColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setTailColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === tailColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === tailColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Glass Type</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {glassColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === glassColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setGlassColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === glassColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === glassColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Steering Wheel Color</div>
<div className="flex flex-row gap-8 items-center flex-wrap py-4">
  {steeringColors.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === steeringWheelColor.color ? "opacity-90" : ""}`}
      onClick={() => handleColorClick(setSteeringWheelColor, item)}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 ${item.color === steeringWheelColor.color ? "border-green-500" : "border-gray-600"}`}
        style={{ backgroundColor: item.color }}
      />
      <div className={`text-center font-bold text-xs ${item.color === steeringWheelColor.color ? "text-green-500" : "text-black"} capitalize`}>
        {item.name}
      </div>
    </div>
  ))}
</div>


      <div className="uppercase font-bold font-poppins text-black">Tire Color</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        {wheelColors.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${item.color === tireColor.color ? "cursor-pointer opacity-90" : ""}`}
            onClick={() => handleColorClick(setTireColor, item)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${item.color === tireColor.color ? "border-green-500" : "border-gray-600"}`}
              style={{ backgroundColor: item.color }}
            />
            <div className={`text-center font-bold text-xs ${item.color === tireColor.color ? "text-green-500" : "text-black"} capitalize`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="uppercase font-bold font-poppins text-black">Tire</div>
<div className="flex flex-row gap-8 items-center flex-wrap py-4">
  <button 
    onClick={() => setShowTires(true)}
    className="w-32 h-32 bg-no-repeat bg-center transition-all duration-400 cursor-pointer hover:opacity-90"
    style={{ backgroundImage: `url(${tireImage.src})`, backgroundSize: 'contain' }}
  ></button>
  <button 
    onClick={() => setShowTires(false)}
    className="w-32 h-32 bg-no-repeat bg-center transition-all duration-400 cursor-pointer hover:opacity-90"
    style={{ backgroundImage: `url(${notireImage.src})`, backgroundSize: 'contain' }}
  ></button>
</div>

      <div className="uppercase font-bold font-poppins text-black">Tail</div>
<div className="flex flex-row gap-8 items-center flex-wrap py-4">
  <button 
    onClick={() => setShowTail(true)}
    className="w-32 h-32 bg-no-repeat bg-center transition-all duration-400 cursor-pointer hover:opacity-90"
    style={{ backgroundImage: `url(${tailImage.src})`, backgroundSize: 'contain' }}
  />
  <button 
    onClick={() => setShowTail(false)}
    className="w-32 h-32 bg-no-repeat bg-center transition-all duration-400 cursor-pointer hover:opacity-90"
    style={{ backgroundImage: `url(${notailImage.src})`, backgroundSize: 'contain' }}
  />
</div>

      <div className="uppercase font-bold font-poppins text-black">Brake Design</div>
      <div className="flex flex-row gap-8 items-center flex-wrap py-4">
        <button 
          onClick={() => setBrakeDesign(1)} 
          className="w-32 h-32 bg-cover transition-all duration-400 cursor-pointer hover:opacity-90"
          style={{ backgroundImage: `url(${brake1Image.src})`, backgroundSize: 'contain' }}
        />
        <button 
          onClick={() => setBrakeDesign(2)} 
          className="w-32 h-32 bg-cover transition-all duration-400 cursor-pointer hover:opacity-90"
          style={{ backgroundImage: `url(${brake2Image.src})`, backgroundSize: 'contain' }}
        />
      </div>

    </div>
  );
};

export default Configurator;