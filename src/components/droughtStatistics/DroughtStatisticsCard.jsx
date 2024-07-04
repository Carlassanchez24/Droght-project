const DroughtStatisticsCard = ({ cardData }) => {
    return (
      <li key={cardData.code}>
        <span style={{ color: cardData.color }}>
          {cardData.name} : {cardData.count}
        </span>
      </li>
    );
  };
  
  export default DroughtStatisticsCard;
  