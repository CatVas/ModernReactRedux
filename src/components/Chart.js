import React from 'react';
import {
  Sparklines, SparklinesLine, SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';


function average(arrNums) {
  const length = arrNums.length;

  return length ? _.round(_.sum(arrNums) / arrNums.length) : 0;
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>

      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
