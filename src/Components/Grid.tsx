import React, { useState, useRef, MouseEvent } from 'react'
import Tooltips from './Tooltips';
import { IAttributes } from '../Utilies/utilies';

interface Props {
  data: any[];
  attributes: IAttributes;
}

function Grid({ data, attributes }: Props) {
  const {
    highest_x,
    axis_x_interval,
    axis_x_num,
    axis_area,
    highest_y,
    axis_y_interval,
    axis_y_num } = attributes;

  return (
    <React.Fragment>
      {/* y-axis */}
      {axis_y_num.map((num, i) =>
        <g fill="gray">
          <text
            style={{ fontSize: 100 + "%" }}
            textAnchor="end"
            x={axis_area + "%"}
            y={100 - (axis_area) - (100 - (axis_area * 2)) / (axis_y_num.length-1) * (i) + 0.65 +"%"}
          >
            {num + "-"}
          </text>
          <line
            strokeWidth="1"
            stroke="lightgray"
            x1={axis_area + "%"}
            x2={100 - axis_area + "%"}
            y1={100 - (axis_area) - (100 - (axis_area * 2)) / (axis_y_num.length-1) * (i) + "%"}
            y2={100 - (axis_area) - (100 - (axis_area * 2)) / (axis_y_num.length-1) * (i) + "%"} />
        </g>)
      }
      {/* x-axis */}
      <line
        strokeWidth="1"
        stroke="gray"
        x1={axis_area + "%"}
        x2={100 - axis_area + "%"}
        y1={100 - axis_area + "%"}
        y2={100 - axis_area + "%"} />

      {axis_x_num?.map((num, i) => 
        <g fill="gray"> 
          <text
            textAnchor="middle"
            x={axis_area + i * ((100 - axis_area * 2) / (axis_x_num.length-1)) + "%"}
            y={100 - axis_area / 2 + "%"}
          >
            {num}
          </text>
          <line
            strokeWidth="1"
            stroke="lightgray"
            x1={axis_area + i * ((100 - axis_area * 2) / (axis_x_num.length-1)) + "%"}
            x2={axis_area + i * ((100 - axis_area * 2) / (axis_x_num.length-1)) + "%"}
            y1={100 - axis_area + "%"}
            y2={axis_area + "%"} />
        </g>)}
    </React.Fragment>
  )
}

export default Grid
