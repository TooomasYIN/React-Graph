import React from 'react'
import { Idata, IAttributes } from '../Utilies/utilies';
import { color } from '../Utilies/colorScheme';

interface Props {
  data: Idata[];
  attributes: IAttributes;
}

function Bars({ data, attributes }: Props) {
  const {
    bar_width,
    highest_y: highest_bar,
    axis_area,
    bar_spacing,
    text_size,
    axis_y_interval: axis_interval,
    axis_y_num: axis_num } = attributes;

  const createBars = (data: Idata, i: number) => {
    let prev_height = 0, values = data.value;
    let elements: any[] = [];

    values?.map((v, j) => {
      let height = v / highest_bar * (100 - (axis_area * 2));
      elements.push(
        <rect
          fill={color[j]}
          x={(axis_area + (i + 1) * bar_spacing + i * bar_width) + "%"}
          y={100 - axis_area - prev_height - v / highest_bar * (100 - (axis_area * 2)) + "%"}
          height={height + "%"}
          width={bar_width + "%"}
        />
      );
      prev_height += height;
    })

    return elements;
  }

  return (
    <React.Fragment>
      {data.map((d, i) => createBars(d, i))}
      <g fill="gray">
        {data.map((d, i) =>
          <text
            textAnchor="middle"
            x={(axis_area + (i + 1) * bar_spacing + i * bar_width) + bar_width / 2 + "%"}
            y={100 - axis_area / 2 + "%"}
          >
            {d.name}
          </text>
        )}
      </g>
    </React.Fragment>
  )
}

export default Bars
