import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  outline: {
    light_blue_A700_63_01:
      "border border-light_blue-A700_63_01 border-solid text-black-900",
  },
  fill: {
    white_A700: "bg-white-A700 text-indigo-A400",
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
  },
};
const sizes = { xs: "p-3.5", sm: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "light_blue_A700_63_01",
    "white_A700",
    "light_blue_A700",
  ]),
};

export { Button };
