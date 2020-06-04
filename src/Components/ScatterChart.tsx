import React from 'react'
import { findTheLargestDataSet, axisNumbersGenerate, Idata } from '../Utilies/utilies';
import Grid from './Grid';

interface Props {
  data: Idata[];
}

function ScatterChart({ data }:Props ) {
  let bar_width = 1 / data.length * 50;
  let [highest_x, highest_y] = findTheLargestDataSet(data);
  let axis_area = 10;
  let bar_spacing = 1 / data.length * 20

  let text_size = 100 // pixel
  let axis_x_interval = highest_x / 10;
  let axis_y_interval = highest_y / 10;
  let axis_x_num = axisNumbersGenerate(0, highest_x, axis_x_interval);
  let axis_y_num = axisNumbersGenerate(0, highest_y, axis_y_interval);

  let attributes = {
    bar_width,
    highest_x, 
    highest_y,
    axis_area,
    bar_spacing,
    text_size,
    axis_x_interval,
    axis_y_interval,
    axis_x_num,
    axis_y_num
  }

  return (
    <svg>
      <Grid data={data} attributes={attributes}/>
      {data.map(d => 
        <circle
          fill="#2A5784"
          stroke="black"
          strokeWidth="1"
          r={5} 
          cx={axis_area + (d.value[0]/highest_x) * (100 - (axis_area * 2)) + "%"}
          cy={axis_area + (1- d.value[1]/highest_y) * (100 - axis_area * 2) + "%"}
        />)}
    </svg>
  )
}

export default ScatterChart
