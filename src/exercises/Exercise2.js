import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Exercise2() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const usersFromApi = await axios.get(
      "https://randomuser.me/api/?results=5"
    );
    setUsers(usersFromApi.data.results);
  }, []);
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((u) => (
          <div>
            <div>{u.name.first}</div>
            <div>{u.name.last}</div>
            <img src={u.picture.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
}
