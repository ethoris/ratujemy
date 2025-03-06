// src/components/ColorPicker.js
import React from 'react';
import { SketchPicker } from 'react-color';

/**
 * Komponent przyjmujący aktualny kolor w propsach i funkcję zwrotną onChange,
 * którą wywołuje przy każdej zmianie barwy.
 */
const ColorPicker = ({ color, onChange }) => {
  // Funkcja wywoływana przy zmianie koloru w SketchPicker
  const handleChangeComplete = (newColor) => {
    // newColor to obiekt zawierający m.in. newColor.hex, newColor.rgb, itp.
    // Interesuje nas newColor.hex (np. #ff0000)
    onChange(newColor.hex);
  };

  return (
    <div>
      <SketchPicker
        color={color}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default ColorPicker;
