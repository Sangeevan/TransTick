import React from 'react';
import './AllTicketsContainer.css';

interface ContainerProps { }

const AllTicketsContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default AllTicketsContainer;
