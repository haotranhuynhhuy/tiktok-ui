import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "../assets/images";
import styles from "./Image.module.scss";
const Image = forwardRef(({ src, className, alt, fallback, ...prop }, ref) => {
  const [_fallback, setFallback] = useState();
  const handleError = () => {
    setFallback(fallback ? fallback : images.noImage);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={_fallback || src}
      alt={alt}
      {...prop}
      onError={handleError}
    />
  );
});

export default Image;
