import React, { useState } from "react";
import ColorInput from "./ColorInput";
import ColorPreview from "./ColorPreview";

const ColorConverter = () => {
  const [color, setColor] = useState("");
  const [convertedColor, setConvertedColor] = useState("");

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )})`
      : null;
  };

  const rgbToHex = (rgb) => {
    const result = rgb.match(/\d+/g);
    return result
      ? `#${result
          .map((x) => parseInt(x).toString(16).padStart(2, "0"))
          .join("")}`
      : null;
  };

  const handleConvert = () => {
    let result = "";
    if (color.startsWith("#")) {
      result = hexToRgb(color);
    } else if (color.startsWith("rgb")) {
      result = rgbToHex(color);
    } else {
      result = "Sai định dạng";
    }
    setConvertedColor(result || "Sai định dạng");
  };

  return (
    <div>
      <h2 className="text-center my-4">Công cụ chuyển đổi mã màu</h2>
      <ColorInput
        color={color}
        setColor={setColor}
        handleConvert={handleConvert}
      />
      <ColorPreview convertedColor={convertedColor} />
    </div>
  );
};

export default ColorConverter;
