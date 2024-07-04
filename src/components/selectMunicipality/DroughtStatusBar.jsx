import { useState, useEffect } from 'react';

const DroughtStatus = () => {
  const [data, setData] = useState([]);
  const [droughtStatus, setDroughtStatus] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://analisi.transparenciacatalunya.cat/resource/i5n8-43cw.json');
      const result = await response.json();

      const values = result.map(item => item.estat_sequera_pluviom_tric);

      const modeValue = calculateMode(values);
      setDroughtStatus(modeValue);

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateMode = (values) => {
    const frequency = {};
    values.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    let maxFreq = 0;
    let mode = '';
    for (const [key, value] of Object.entries(frequency)) {
      if (value > maxFreq) {
        maxFreq = value;
        mode = key;
      }
    }
    return mode;
  };

  const getColorForDroughtLevel = (level) => {
    if (level === 'MOLT_SECA') {
      return '#FF0000'; 
    } else if (level === 'SECA') {
      return '#FFA500'; 
    } else if (level === 'NORMALITAT') {
      return '#0000FF'; 
    } else {
      return '#0000FF'; 
    }
  };

  const getProgressStyle = () => {
    return {
      width: '100%',
      height: '30px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      marginTop: '10px',
      borderRadius: '15px', 
      position: 'relative',
      overflow: 'hidden',
    };
  };

  const getProgressBarStyle = (level) => {
    const color = getColorForDroughtLevel(level);
    let widthPercentage;

    switch (level) {
      case 'MOLT_SECA':
        widthPercentage = 100;
        break;
      case 'SECA':
        widthPercentage = 70;
        break;
      case 'NORMALITAT':
        widthPercentage = 30;
        break;
      default:
        widthPercentage = 10;
        break;
    }

    return {
      height: '100%',
      width: `${widthPercentage}%`,
      backgroundColor: color,
      transition: 'width 0.5s ease',
      borderRadius: '15px', 
    };
  };

  return (
    <div className="flex flex-row items-center justify-center p-10 bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">State of Rainfall Drought</h1>
        <div className="mb-4">
          <div style={getProgressStyle()}>
            <div style={getProgressBarStyle(droughtStatus)}></div>
          </div>
          <p className="mt-2">Most Common Drought Status: {droughtStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default DroughtStatus;

