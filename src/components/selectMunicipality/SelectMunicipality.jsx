/* import { useState, useEffect } from 'react';
import DroughtData from './DroughtData';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";

const SelectMunicipality = () => {
  const initialMunicipio = 'Barcelona'; 
  const [municipio, setMunicipio] = useState(initialMunicipio);
  const [municipios, setMunicipios] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data');
    const fetchData = async () => {
      try {
        const response = await fetch('https://analisi.transparenciacatalunya.cat/resource/i5n8-43cw.json');
        let result = await response.json();

        result.sort((a, b) => {
          return new Date(b.data) - new Date(a.data);
        });

        const municipiosSet = new Set();
        const uniqueData = [];

        result.forEach(item => {
          if (!municipiosSet.has(item.municipi)) {
            municipiosSet.add(item.municipi);
            uniqueData.push(item);
          }
        });

        setData(uniqueData);

        const uniqueMunicipios = [...municipiosSet];
        setMunicipios(uniqueMunicipios);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Loading error: {error.message}</p>;

  const handleMunicipioChange = (value) => {
    setMunicipio(value);
  };

 
  return (
    <div className="flex flex-row items-center justify-center space-x-10 mt-8">
      <Select onValueChange={handleMunicipioChange}>
        <SelectTrigger className="w-[200px] bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
          <SelectValue placeholder="Select Municipality">{municipio}</SelectValue>
        </SelectTrigger>
        <SelectContent className="mt-2 bg-white shadow-lg rounded border border-gray-300 max-h-60 overflow-y-auto">
          <SelectItem value="Select">Select</SelectItem>
          {municipios.map((m) => (
            <SelectItem key={m} value={m} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              {m}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <DroughtData municipio={municipio} data={data} />
    </div>
  );
};
export default SelectMunicipality;


 

 */



import { useState, useEffect } from 'react';
import DroughtData from './DroughtData';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";

const SelectMunicipality = () => {
  const initialMunicipio = 'Barcelona'; 
  const [municipio, setMunicipio] = useState(initialMunicipio);
  const [municipios, setMunicipios] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data');
    const fetchData = async () => {
      try {
        const response = await fetch('https://analisi.transparenciacatalunya.cat/resource/i5n8-43cw.json');
        let result = await response.json();

        result.sort((a, b) => {
          return new Date(b.data) - new Date(a.data);
        });

        const municipiosSet = new Set();
        const uniqueData = [];

        result.forEach(item => {
          if (!municipiosSet.has(item.municipi)) {
            municipiosSet.add(item.municipi);
            uniqueData.push(item);
          }
        });

        setData(uniqueData);

        const uniqueMunicipios = [...municipiosSet];
        setMunicipios(uniqueMunicipios);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Loading error: {error.message}</p>;

  const handleMunicipioChange = (value) => {
    setMunicipio(value);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-10 mt-8">
      <Select onValueChange={handleMunicipioChange}>
        <SelectTrigger className="w-[200px] bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
          <SelectValue placeholder="Select Municipality">{municipio}</SelectValue>
        </SelectTrigger>
        <SelectContent className="mt-2 bg-white shadow-lg rounded border border-gray-300 max-h-60 overflow-y scroll-auto	">
          <SelectItem className='overflow-y max-h-20 scroll-auto' value="Select">Select</SelectItem>
          {municipios.map((m) => (
            <SelectItem key={m} value={m} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              {m}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <DroughtData municipio={municipio} data={data} />
    </div>
  );
};

export default SelectMunicipality;

 