import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <p> Do you like this project?  </p>
      <p> Five a start to the <a target="_blank" rel="noopener noreferrer" href=" https://github.com/laurapmedeiro/blue-green-pwa.git"> repository </a></p>
    </div>
  );
};

export default ExploreContainer;
