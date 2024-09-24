import React from 'react';
import MouseTracker from './MouseTracker';

const MouseMoveDisplay = () => {
  return (
    <div>
      <h1>Custom Mouse Tracker</h1>
      <MouseTracker render={({ x, y }) => (
        <div>
          <p>The mouse position is ({x}, {y})</p>
          <div
            style={{
              position: 'absolute',
              left: x - 25,
              top: y - 25,
              width: 50,
              height: 50,
              backgroundColor: 'rgba(0, 150, 255, 0.7)',
              borderRadius: '50%',
              pointerEvents: 'none', 
            }}
          />
        </div>
      )} />
    </div>
  );
};

export default MouseMoveDisplay;
