import React, { useState, useRef } from 'react'
import { axisNumbersGenerate, findTheLargestData, Idata } from '../Utilies/utilies';
import Grid from './Grid';
import Bars from './Bars';

interface Props {
  data: Idata[];
}

function BarChart({ data }: Props) {
  // the units are percentage
  let bar_width = 1 / data.length * 50;
  let highest_y = findTheLargestData(data);
  let axis_area = 10;
  let bar_spacing = 1 / data.length * 20

  let text_size = 100 // pixel
  let axis_y_interval = highest_y / 10;
  let axis_y_num = axisNumbersGenerate(0, highest_y, axis_y_interval);

  let attributes = {
    bar_width,
    highest_y,
    axis_area,
    bar_spacing,
    text_size,
    axis_y_interval,
    axis_y_num
  }

  const [targetData, setTargetData] = useState(data[0])
  const ref = useRef<any>()

  return (
    <svg>
      <Grid data={data} attributes={attributes} />
      <Bars data={data} attributes={attributes} />
    </svg>
  )
}

export default BarChart
