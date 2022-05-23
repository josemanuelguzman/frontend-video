import React, { forwardRef, VideoHTMLAttributes } from "react";
import styles from "./Video.module.css";

export default forwardRef(function Video(
  { className, ...rest }: VideoHTMLAttributes<HTMLVideoElement>,
  ref: React.Ref<HTMLVideoElement>
) {
  const classes = className || styles.video;

  return (
    <video className={classes} ref={ref} {...rest}>
      Your browser does not support the element <code>video</code>.
    </video>
  );
});
