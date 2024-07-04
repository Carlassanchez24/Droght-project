import { useEffect, useState } from "react";
import DroughtStatisticsCard from "./DroughtStatisticsCard.jsx";
import droughtTypesMap from "../../data/droughtTypesMap.js";

const DroughtStatistics = ({ globalData }) => {

  const [consolidatedData, setConsolidatedData] = useState([]);

  useEffect(() => {

    console.log("consolidando datos => " + globalData.length)

    const consolidatedDataMap = {};
    for(let key in droughtTypesMap) {
      consolidatedDataMap[key] = droughtTypesMap[key];
      consolidatedDataMap[key].count = 0;
    }

    globalData.map((item) => {
      if (consolidatedDataMap[item.codi_estat_sequera_hidrol]) {
        consolidatedDataMap[item.codi_estat_sequera_hidrol].count =
          consolidatedDataMap[item.codi_estat_sequera_hidrol].count + 1;
      } else {
        console.warn(
          "No existe el codigo de sequia => " + item.codi_estat_sequera_hidrol
        );
      }
    });

    setConsolidatedData(Object.values(consolidatedDataMap));
  }, []);

  return (
    <div>
      <h2>Statistics:</h2>
      <ul>
        {consolidatedData.map((item) => (
          <DroughtStatisticsCard
            key={item.code}
            cardData={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default DroughtStatistics;
