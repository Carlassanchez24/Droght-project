import { useEffect, useState } from 'react';
import {getAllUsers} from '../../services/DataServiceController';

function DataService() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      getAllUsers()
        .then(data => {
          setUsers(data); // Assuming the API returns an array of users
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message || "An error occurred while fetching users.");
          setIsLoading(false);
        });
    }, []);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default DataService;