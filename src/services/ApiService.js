import axios from "axios";

const BASE_URL =
  "https://analisi.transparenciacatalunya.cat/resource/i5n8-43cw.json";

const parseDate = (dateString) => new Date(dateString);

export const getAllMunicipalitiesWithLastReport = async () => {
  try {
    const response = await axios.get(BASE_URL);

    const consolidateData = Object.values(
      response.data.reduce((municMap, item) => {
        if (
          item.codi_estat_sequera_hidrol &&
          (!municMap[item.codi_municipi] ||
            parseDate(item.data_canvi_estat_sequera) >
              parseDate(municMap[item.codi_municipi].data_canvi_estat_sequera))
        ) {
          municMap[item.codi_municipi] = item;
        }
        return municMap;
      })
    );

    return consolidateData;
  } catch (error) {
    console.error("Error data: ", error);
    throw error;
  }
};

export const getMunicipalitiesByState = async (stateCode) => {
  try {
    return stateCode;
  } catch (error) {
    console.error("Error data: ", error);
    throw error;
  }
};

export const getMunicipalityByCodeOrName = async (codeOrName) => {
  try {
    return codeOrName;
  } catch (error) {
    console.error("Error data: ", error);
    throw error;
  }
};
