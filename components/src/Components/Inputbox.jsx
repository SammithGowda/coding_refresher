import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { PinItem } from "./Pinitem";
export const InputBoxes = ({ length, lable, perBox, onChange }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(""));
  const handlechnage = (value, index) => {
    // console.log(value, "v", index, "i");
    const samm = [...values];
    samm[index] = value;
    setValues(samm);
    if (value.length > 0 && value.length === perBox && index < length - 1) {
      elements.current[index + 1].focus();
    }
    onChange(samm.join(""));
  };
  useEffect(() => {
    console.log(elements, "hgjkl;l");
  }, []);

  const handlebackspace = (value, index) => {
    if (index > 0) {
      elements.current[index - 1].focus();
      const samm1 = [...values];
      samm1[index] = value;
      setValues(samm1);
      onChange(samm1.join(""));
    }
  };
  const handlepaste = (e) => {
    e.preventDefault();
    console.log(e.clipboardData.getData("Text"));
  };
  return (
    <div onPaste={handlepaste}>
      {lable}
      {values.map((el, index) => (
        <PinItem
          key={index}
          max={perBox}
          onBackspace={(v) => handlebackspace(v, index)}
          ref={(n) => (elements.current[index] = n)}
          onChange={(v) => handlechnage(v, index)}
        />
      ))}
    </div>
  );
};
InputBoxes.propTypes = {
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number,

  lable: PropTypes.string,
};
InputBoxes.defaultProps = {
  lable: "Lable",
  perBox: 1,
};
