import { useEffect } from "react";
import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import Todo from "./todo_drop_down";


function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="dark" responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.userId}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{`${item.completed}`}</td>

              <td />
            </tr>
          ))}
        </tbody>
      </Table>

      <br />
      <br />

     <Todo  />
     <br/>
     <br/>
    </div>
  );
}

export default Api;
