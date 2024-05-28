import { useState } from "react";
import { Link, LinkProps } from "react-router-dom";
import { toggleWindow } from "../redux/feats/windows/windowSlice";
import { useAppDispatch } from "../redux/hooks";

export const LinkDoubleClick = (props: LinkProps) => {
  const [preventDefault, setPreventDefault] = useState(true);
  const location = props.to?.toString().replace("/", "").replace("-", "");
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    if (preventDefault) {
      e.preventDefault();
    } else {
      // double click
      dispatch(toggleWindow(location));
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
