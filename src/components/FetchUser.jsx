import { useState, useEffect } from 'react';

function FetchUser() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First name: {user.results[0].name.first}</h2>
      <h2>Last name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data pending</h1>
  );
}

export default FetchUser;
