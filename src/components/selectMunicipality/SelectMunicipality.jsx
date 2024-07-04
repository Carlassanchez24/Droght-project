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
    <div>
      <Select onValueChange={handleMunicipioChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue>{municipio}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {municipios.map((m) => (
            <SelectItem key={m} value={m}>
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


 

/* 
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
    <div>
      <Select onValueChange={handleMunicipioChange} className="relative">
        <SelectTrigger className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md cursor-pointer">
          <SelectValue className="">{municipio}</SelectValue>
        </SelectTrigger>
        <SelectContent className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10">
          {municipios.map((m) => (
            <SelectItem key={m} value={m} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
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
