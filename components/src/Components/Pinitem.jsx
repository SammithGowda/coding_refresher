import { forwardRef } from "react";
import PropTypes from "prop-types";
import "../App.css";
const style = {
  padding: 10,
  width: 15,
  fontsize: 14,
  margin: 5,
};

export const PinItem = forwardRef(({ onChange, onBackspace, max }, ref) => {
  const handlekeyup = (e) => {
    switch (e.keyCode) {
      case 8: {
        if (!e.target.value) onBackspace(e.target.value);

        break;
      }
      case 9: {
        e.preventDefault();
        break;
      }
      default: {
        onChange(e.target.value);
      }
    }
    // console.log(e.keyCode);
  };
  return (
    <input className="inpu" onKeyUp={handlekeyup} ref={ref} maxLength={max} />
  );
});

PinItem.propTypes = {
  max: PropTypes.number,
  onBackspace: PropTypes.func,
  onChange: PropTypes.func,
};
PinItem.defaultProps = {
  max: 1,
};
