import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => (
  <div style={{ height: '100%' }}>
    {colors.map((color, index) => (
      <DraggableColorBox
        index={index}
        key={color.name}
        color={color.color}
        name={color.name}
        deleteColor={deleteColor}
      />
    ))}
  </div>
));

export default DraggableColorList;
