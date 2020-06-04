export function findTheLargestData(data: Idata[]): number {
  let max: number = 0;
  data.map(i => {
    let total = 0;
    i.value.map((j: number) => total+=j)
    if (total > max ) max = total;
  })
  return max;
}

export function findTheLargestDataSet(data: Idata[]): number[] {
  let max: number[] = new Array(2, 0);
  data.map(d => {
    d.value.map((v, i) => {
      if (v > max[i])
        max[i] = v;
    })
  })
  return max;
}

export function axisNumbersGenerate(from: number, to: number, interval: number = 1): number[] {
  let arr = [];
  for (let i = 0, j = from; j <= to+0.00000000000000001; i++, j += interval) {
    arr[i] = parseFloat(j.toFixed(2));
  }
  return arr;
}

export function sumOfData(data: Idata[]): number {
  let total = 0;
  data.map(v => total += v.value[0]);
  return total;
}

export const csv2JSON = (csv: string): Idata[] => {
  let csv_arr = csv.split("\n");
  let data: Idata[] = [];
  csv_arr.map(row => {
    if (row.trim() !== "") {
      let arr = row.split(",");
      data.push(
        { name: (arr.shift() || ""),
          value: [...arr.map(str => parseFloat(str))] 
        })
    }
  })
  return data;
}

export interface Idata {
  name: string,
  value: number[]
}

export interface IAttributes {
  bar_width: number;
  highest_x?: number;
  highest_y: number;
  axis_area: number;
  bar_spacing: number;
  text_size: number;
  axis_x_interval?: number;
  axis_x_num?: number[];
  axis_y_interval: number;
  axis_y_num: number[];
}