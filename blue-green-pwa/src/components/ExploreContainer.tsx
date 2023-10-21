import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <p> Do you like this project?  </p>
      <p> Five a start to the <a target="_blank" rel="noopener noreferrer" href=" https://github.com/laurapmedeiro/TFM_DevOps.git"> repository </a></p>
      <p> Or open a ticket with your suggestions. </p>
    </div>
  );
};

export default ExploreContainer;
