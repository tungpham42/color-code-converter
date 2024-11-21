import React from "react";

const ColorPreview = ({ convertedColor }) => (
  <div>
    {convertedColor && (
      <div className="text-center">
        <h5>Màu đã được đổi</h5>
        <div
          style={{
            backgroundColor: convertedColor,
            width: "250px",
            height: "250px",
            margin: "10px auto",
            border: "1px solid #000000",
          }}
        ></div>
        <p>{convertedColor}</p>
      </div>
    )}
  </div>
);

export default ColorPreview;
