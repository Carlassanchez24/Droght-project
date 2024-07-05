import { useState, useEffect } from "react";
import { getAllMunicipalitiesWithLastReport } from "../services/ApiService.js";
import CatalunyaMap from "../components/catalunyaMap/CatalunyaMap.jsx";
import DroughtStatistics from "../components/droughtStatistics/DroughtStatistics.jsx";

const CatalunyaMapPage = () => {
  const [allMuniWithLastReport, setAllMuniWithLastReport] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMunicipalitiesWithLastReport();

      setAllMuniWithLastReport(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {allMuniWithLastReport && (
        <div style={{ display: "flex" }}>
          <div style={{ width: "20vw" }}>
            <DroughtStatistics globalData={allMuniWithLastReport} />
          </div>
          <div style={{ width: "80vw" }}>
            <CatalunyaMap globalData={allMuniWithLastReport} />
          </div>
        </div>
      )}
    </>
  );
};
export default CatalunyaMapPage;
