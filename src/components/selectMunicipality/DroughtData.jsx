 /* eslint-disable react/prop-types */

const DroughtData = ({ municipio, data }) => {
    console.log('Rendering DroughtData');
    const filteredData = data.filter(item => item.municipi === municipio);
  
    if (filteredData.length === 0) return <p>No found data for: {municipio}</p>;
  
    return (
      <div>
        <h1>Drouht data for {municipio}</h1>
        {filteredData.map((item, index) => (
          <div key={index}>
            <p className="border-gray-200"><strong>Municipality:</strong> {item.municipi}</p>
            <p className="border-gray-200"><strong>Hydrological drought level:</strong> {item.estat_sequera_hidrol_gic}</p>
            <p className="border-gray-200"><strong>Rainfall drought level:</strong> {item.estat_sequera_pluviom_tric}</p>
            <p className="border-gray-200"><strong>Exploitation unit:</strong> {item.unitat_explotaci}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DroughtData;
