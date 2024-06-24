'use client';
import React from "react";
import { useCustomization } from "../contexts/Customization";
import tireImage from "../public/assets/tire.png";
import notireImage from "../public/assets/notire.png";
import tailImage from "../public/assets/tail.png";
import notailImage from "../public/assets/notail.png";
import brake1Image from "../public/assets/brake1.png";
import brake2Image from "../public/assets/brake2.png";
import "../styles.css";

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
    showTires, setShowTires,
    showTail, setShowTail,
    backlightColor, setBacklightColor,
    tailColor, setTailColor,
    setBrakeDesign
  } = useCustomization();

  const handleColorClick = (
    colorSetter: React.Dispatch<React.SetStateAction<{ color: string; name: string }>>, 
    color: { color: string; name: string }
  ) => {
    colorSetter(color);
  };

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Body Color</div>
        <div className="configurator__section__values">
          {carColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === bodyColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setBodyColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Seat Color</div>
        <div className="configurator__section__values">
          {carColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === leatherColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setLeatherColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Interior Color</div>
        <div className="configurator__section__values">
          {carColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === interiorColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setInteriorColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Backlight Color</div>
        <div className="configurator__section__values">
          {backlightColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === backlightColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setBacklightColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Tail Wing Colour</div>
        <div className="configurator__section__values">
          {carColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === tailColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setTailColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Glass Type</div> 
        <div className="configurator__section__values">
          {glassColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === glassColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setGlassColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div> 

        <div className="configurator__section__title">Steering Wheel Color</div>
        <div className="configurator__section__values">
          {steeringColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === steeringWheelColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setSteeringWheelColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Tire Color</div>
        <div className="configurator__section__values">
          {wheelColors.map((item, index) => (
            <div
              key={index}
              className={`item ${item.color === tireColor.color ? "item--active" : ""}`}
              onClick={() => handleColorClick(setTireColor, item)}
            >
              <div className="item__dot" style={{ backgroundColor: item.color }} />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Tire</div>
        <div className="configurator__section__values">
          <button 
            onClick={() => setShowTires(true)}
            style={{ 
              backgroundImage: `url(${tireImage.src})`, 
              backgroundSize: 'cover', 
              width: '125px', 
              height: '100px' 
            }}
          />
          <button 
            onClick={() => setShowTires(false)}
            style={{ 
              backgroundImage: `url(${notireImage.src})`, 
              backgroundSize: 'cover', 
              width: '125px', 
              height: '100px' 
            }}
          />
        </div>

        <div className="configurator__section__title">Tail</div>
        <div className="configurator__section__values">
          <button 
            onClick={() => setShowTail(true)}
            style={{ 
              backgroundImage: `url(${tailImage.src})`, 
              backgroundSize: 'cover', 
              width: '125px', 
              height: '100px' 
            }}
          />
          <button 
            onClick={() => setShowTail(false)}
            style={{ 
              backgroundImage: `url(${notailImage.src})`, 
              backgroundSize: 'cover', 
              width: '125px', 
              height: '100px' 
            }}
          />
        </div>

        <div className="configurator__section__title">Brake Design</div>
        <div className="configurator__section__values">
          <button 
            onClick={() => setBrakeDesign(1)} 
            style={{ 
              backgroundImage: `url(${brake1Image.src})`, 
              backgroundSize: 'cover', 
              width: '125px', 
              height: '100px' 
            }}
          />
          <button 
            onClick={() => setBrakeDesign(2)} 
            style={{ 
              backgroundImage: `url(${brake2Image.src})`, 
              backgroundSize: 'cover', 
              width: '125px', 
              height: '100px' 
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Configurator;