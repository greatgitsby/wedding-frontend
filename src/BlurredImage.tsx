import React, { useState } from 'react';
import Image from "next/image";
import { makeStyles, createStyles } from '@material-ui/core';

interface BlurredImageProps {
  relativePath: any;
  width: number;
  height: number;
  imgBase64: string;
  alt: string | undefined;
  objectFit?: any;
  objectPosition?: string | undefined;
  layout?: "fill" | "intrinsic" | "fixed" | "responsive" | undefined;
};

export default function BlurredImage(props: BlurredImageProps) {
    const {
      relativePath,
      width,
      height,
      imgBase64,
      alt,
      objectFit,
      objectPosition,
      layout
    } = props;

    const [isLoaded, setLoaded] = useState(false);
    const useStyles = makeStyles(() =>
    createStyles({
      placeholder: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'blur(2rem)',
        transform: 'scale(1.2)',
        opacity: isLoaded ? '0' : '1',
        transition: 'opacity 0s ease',
        transitionDelay: '300ms'
      },
      image: {
        maxWidth: '100%',
        height: 'auto',
        opacity: isLoaded ? '1' : '0',
        transform: 'scale(1.2)',
        transition: 'opacity 300ms ease',
        position: "relative"
      },
    }),
  );

  const classes = useStyles();

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <img
        aria-hidden="true"
        src={imgBase64}
        className={classes.placeholder}
      />
      <Image
        src={relativePath}
        width={layout !== "fill" ? width : undefined}
        height={layout !== "fill" ? height : undefined}
        onLoad={() => setLoaded(true)}
        alt={alt ? alt : ""}
        className={classes.image}
        loading="lazy"
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
      />
    </div>
  );
}