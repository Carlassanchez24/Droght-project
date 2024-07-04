import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { catalunyaGeoJson } from "../../data/catalunyaGeoJson.js";
import { droughtTypesMap } from "../../data/droughtTypesMap.js";
import "leaflet/dist/leaflet.css";

const CatalunyaMap = ({ globalData }) => {
  
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const municipalityMap = globalData.reduce((elementMap, municipality) => {
        elementMap[municipality.codi_municipi] = {
          // codi_municipi es la llave del ArrayMap
          data_canvi_estat_sequera: municipality.data_canvi_estat_sequera, //fecha
          codi_estat_sequera_hidrol: municipality.codi_estat_sequera_hidrol, //codigo del nivel de la sequia
          estat_sequera_hidrol_gic: municipality.estat_sequera_hidrol_gic, //nombre del estado de sequia
        };
        return elementMap; // retornamos el elemento para añadirlo al ArrayMap
      }, {});

      const updatedFeatures = catalunyaGeoJson.features.map((feature) => {
        // recorremos cada feature del GeoJson
        if (municipalityMap[feature.properties.municipi]) {
          // si lo encuentra dentro del mapa, le añade atributos
          feature.properties.data_canvi_estat_sequera =
            municipalityMap[
              feature.properties.municipi
            ].data_canvi_estat_sequera; // fecha
          feature.properties.codi_estat_sequera_hidrol =
            municipalityMap[
              feature.properties.municipi
            ].codi_estat_sequera_hidrol; // codigo de sequia
          feature.properties.estat_sequera_hidrol_gic =
            municipalityMap[
              feature.properties.municipi
            ].estat_sequera_hidrol_gic; // nombre de la sequia
        }
        return feature;
      });

      setGeoData({ ...catalunyaGeoJson, features: updatedFeatures });
    };

    fetchData();
  }, []);

  const delimiterStyle = (feature) => {
    
    let colorMunicipality;

    if (droughtTypesMap[feature.properties.codi_estat_sequera_hidrol]) {
      colorMunicipality = droughtTypesMap[feature.properties.codi_estat_sequera_hidrol].color;
    } else {
      colorMunicipality = "#000000";
    }

    return {
      color: colorMunicipality,
      weight: 0.5
    };
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties.codi_estat_sequera_hidrol) {
      // si existe el atributo de codigo de sequia
      layer.bindPopup(`<span><b>Codigo: </b> ${feature.properties.municipi}</span><br/>
        <span><b>Nombre: </b> ${feature.properties.nom_muni}</span><br/>
        <span><b>Nivel de sequia: </b> ${feature.properties.estat_sequera_hidrol_gic}</span><br/>
        <span><b>Fecha: </b> ${feature.properties.data_canvi_estat_sequera}</span>
        `);
    } else {
      layer.bindPopup(`<span><b>Codigo: </b> ${feature.properties.municipi}</span><br/>
        <span><b>Nombre: </b> ${feature.properties.nom_muni}</span>
        `);
    }
  };

  return (
    <div>
      <MapContainer
        center={[41.3851, 2.1734]}
        zoom={8}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="<a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {geoData && ( // mientras geoData sea null, no se pinta el componente
          <GeoJSON
            data={geoData}
            style={delimiterStyle}
            onEachFeature={onEachFeature} // evento click
          />
        )}
      </MapContainer>
    </div>
  );
};
export default CatalunyaMap;