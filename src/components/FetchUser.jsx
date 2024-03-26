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
      <h2>Data returned</h2>
      <h3>First name: {user.results[0].name.first}</h3>
      <h3>Last name: {user.results[0].name.last}</h3>
    </div>
  ) : (
    <h2>Data pending</h2>
  );
}

export default FetchUser;
