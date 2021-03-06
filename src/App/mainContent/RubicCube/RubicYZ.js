import React, {useState} from 'react';
import Arrow from './Arrow';

export default function RubicYZ({el, rubicByYZ, oneCubeSize, YZstyle}) {
  let rotate;
  if(el === -1){
    rotate = YZstyle.left;
  }else if(el === 0){
    rotate = YZstyle.mid;
  }else{
    rotate = YZstyle.right;
  }

  let style;
  if(rotate === 0){
style = {
  transform: `rotateY(-90deg) rotateZ(${rotate}deg) translateX(-${1.5*oneCubeSize}px) translateY(-${1.5*oneCubeSize}px) translateZ(${
    (el-0.5) * -oneCubeSize
  }px)`,

  transformStyle: "preserve-3d",
  opacity: `1`
}}else{
  style = {
    transform: `rotateY(-90deg) rotateZ(${rotate}deg) translateX(-${1.5*oneCubeSize}px) translateY(-${1.5*oneCubeSize}px) translateZ(${
      (el-0.5) * -oneCubeSize
    }px)`,
    transition: `1s all`,
    transformStyle: "preserve-3d",
    opacity: `1`
}}

    return (
        <div className='YZ'
        style={style}
      >
        <div className="full face">
          {rubicByYZ.left.slice(9*el + 9, 9 * el + 18).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
        <div
          className="face partX"
          style={{
            transform: ` translateY(${oneCubeSize}px) translateX(-50%) translateZ(${
              -oneCubeSize / 2
            }px) rotateX(90deg) rotateY(90deg)`,
          }}
        >
          {rubicByYZ.back.slice(3 * el + 3 , 3 * el + 6).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
        <div
          className="face partX"
          style={{
            transform: ` translateY(${oneCubeSize}px) translateX(50%) translateZ(${
              -oneCubeSize / 2
            }px) rotateX(90deg) rotateY(-90deg)`,
          }}
        >
          {rubicByYZ.front.slice(3 * el +3 , 3 * el + 6).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
        <div
          className="face partX"
          style={{
            transform: `translateY(${oneCubeSize * 2.5}px) translateZ(${
              -oneCubeSize / 2
            }px) rotateX(90deg)`,
          }}
        >
          {rubicByYZ.bottom.slice(3 * el +3 , 3 * el + 6).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
        <div
          className="face partX"
          style={{
            transform: ` translateY(${-(oneCubeSize * 0.5)}px) translateZ(${
              -oneCubeSize / 2
            }px) rotateX(90deg) rotateY(180deg)`,
          }}
        >
          {rubicByYZ.top.slice(3 * el + 3  , 3 * el + 6).map((color) => (
            <div style={{ backgroundColor: color }}/>            ))}
        </div>
        <div
          className="face full"
          style={{
            transform: `rotateX(180deg) translateZ(${oneCubeSize}px)`,
          }}
        >
        {rubicByYZ.right.slice(9 * el + 9, 9 * el + 18).map((color) => (
          <div style={{ backgroundColor: color }}/>            ))}
        </div>
      </div>
    )
}
