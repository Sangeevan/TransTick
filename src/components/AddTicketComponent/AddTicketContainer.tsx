import React from 'react';
import './AddTicketContainer.css';

interface ContainerProps { }

const AddTicketContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default AddTicketContainer;
