import React from 'react'
import { Idata } from '../Utilies/utilies'

interface Props {
  targetData: Idata;
  linkRef: any;
}

function Tooltips({ targetData, linkRef }: Props) {
  return (
    <div className="tooltips" ref={linkRef}>
      <b>Details</b><br />
      <ul>
        {targetData.name === "" && <li>{targetData.name}</li>}
        <li>{targetData.value}</li>
      </ul>
    </div>
  )
}

export default Tooltips
