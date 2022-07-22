import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

function App() {
  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get("api/users");
    setUsers(response.data.users);
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return (
            <div>
              <p>name: {user.name}</p>
              <p>email : {user.email}</p>
              <p>active : {user.active ? "true" : "false"}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
