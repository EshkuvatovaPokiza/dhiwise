import React from "react";

const sizeClasses = {
  txtRobotoMedium28: "font-medium font-roboto",
  txtRobotoRegular20WhiteA700: "font-normal font-roboto",
  txtRobotoMedium20WhiteA700: "font-medium font-roboto",
  txtRobotoMedium4844: "font-medium font-roboto",
  txtRobotoRegular20Black900ab: "font-normal font-roboto",
  txtRobotoMedium3125: "font-medium font-roboto",
  txtRobotoRegular20Black900: "font-normal font-roboto",
  txtRobotoBold6055: "font-bold font-roboto",
  txtRobotoRegular20Black90087: "font-normal font-roboto",
  txtRobotoRegular20Black90099: "font-normal font-roboto",
  txtRobotoRegular25: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoMedium25Black900: "font-medium font-roboto",
  txtRobotoRegular20Black90090: "font-normal font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoBold49: "font-bold font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoMedium25: "font-medium font-roboto",
  txtRobotoMedium20Black900: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
