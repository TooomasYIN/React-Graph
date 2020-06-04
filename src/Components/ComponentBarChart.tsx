import React from 'react'
import { findTheLargestData, axisNumbersGenerate, Idata } from '../Utilies/utilies';
import Grid from './Grid';
import Bars from './Bars';

/* const data = [
  { name: "A1", value: [10, 20, 30] },
  { name: "A2", value: [45, 20, 23] },
  { name: "A3", value: [12, 25, 20] },
  { name: "A4", value: [10, 20, 30] },
  { name: "A5", value: [45, 20, 23] },
  { name: "A6", value: [12, 25, 20] },
  { name: "A7", value: [10, 20, 30] },
  { name: "A8", value: [45, 20, 23] },
  { name: "A9", value: [12, 25, 20] },
  { name: "A10", value: [10, 20, 30] },
  { name: "A11", value: [45, 20, 23] },
  { name: "A12", value: [12, 25, 200] },
] */

interface Props {
  data: Idata[];
}

function ComponentBarChart({ data }: Props) {
  let bar_width = 1 / (data.length) * 50;
  let highest_bar = findTheLargestData(data);
  let axis_area = 10;
  let bar_spacing = 1 / data.length * 20

  let text_size = 100 // pixel
  let axis_interval = highest_bar / 10;
  let axis_num = axisNumbersGenerate(0, highest_bar, axis_interval);

  let attributes = {
    bar_width,
    highest_y: highest_bar,
    axis_area,
    bar_spacing,
    text_size,
    axis_y_interval: axis_interval,
    axis_y_num: axis_num
  }

  return (
    <React.Fragment>
      <svg>
        <Grid data={data} attributes={attributes} />
        <Bars data={data} attributes={attributes}/>
      </svg>
    </React.Fragment>
  )
}

export default ComponentBarChart
