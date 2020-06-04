import React from 'react'
import { sumOfData, Idata } from '../Utilies/utilies'
import { color } from '../Utilies/colorScheme';

interface Props {
  data: Idata[];
}

function PieChart({ data }:Props ) {
  let
    center_x = 50, center_y = 50, radius = 50,
    ori_x = center_x, ori_y = 0,
    total_value = sumOfData(data);

  const createPie = () => {
    let curr_progress = 0, prev_x = ori_x, prev_y = ori_y;
    let arr: any[] = []
    data.map((d, i) => {
      let angle = d.value[0]/total_value*360,
          new_x = Math.sin((angle+curr_progress)*(Math.PI/180))*radius+ori_x, 
          new_y = radius - Math.cos((angle+curr_progress)*(Math.PI/180))*radius,
          direction = 0;
      if (angle > 180)
        direction = 1;
      arr.push(
        <path 
          fill={color[i]}
          d={`M${center_x} ${center_y} L${prev_x} ${prev_y} A${radius} ${radius} 0 ${direction} 1 ${new_x} ${new_y} Z`}
        />
      )
      curr_progress += angle; prev_x=new_x; prev_y=new_y;
    })
    return arr;
  }

  return (
    <svg viewBox="0 0 100 100">
      {createPie()}
    </svg>
  )
}

export default PieChart
