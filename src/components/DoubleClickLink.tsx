import { useState } from "react";
import { Link, LinkProps } from "react-router-dom";

export const LinkDoubleClick = (props: LinkProps) => {
  const [preventDefault, setPreventDefault] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(e);
    }

    // double click
    if (preventDefault) {
      e.preventDefault();
    }
    setPreventDefault(false);
    setTimeout(() => {
      setPreventDefault(true);
    }, 500);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {props.children}
    </Link>
  );
};
