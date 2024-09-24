
import  { useState } from 'react';

const ToggleComponent = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) =>!isOpen);
  };

  return render({ isOpen, toggle });
};

export default ToggleComponent;
