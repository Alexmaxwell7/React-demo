import React from "react";
import Table from 'react-bootstrap/Table'

class Drop_down extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: ""
    };

    this.handleSubmitTodos = this.handleSubmitTodos.bind(this);
  }

 
  handleSubmitTodos(event) {
    alert("dropdown item is " + this.state.title);
    event.preventDefault();
  }

  

  handleChangetitle = event => {
    this.setState({ title: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

  componentDidMount() {
    const todos = require("./todos.json");
    this.setState({ todos: todos });
  }
 
  render() {


    const uniqueCouse = this.getUnique(this.state.todos, "Completed");

    const todos = this.state.todos;
    const title = this.state.title;

    const filterDropdown = todos.filter(function(items) {
      return items.Completed === title;
    });

    return (
      <div>
       

        <form onSubmit={this.handleSubmitTodos}>
          <br />
          <br />
          <h1 style={{textAlign:"center",color:"green"}}>Dropdown Filter</h1>
          <label>
            <select
              value={this.state.title}
              onChange={this.handleChangetitle}
            >
              {uniqueCouse.map(title => (
                <option key={title.id} value={title.Completed}>
                  {title.Completed}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
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
          {filterDropdown.map((item) => (
            <tr>
              <td>{item.Id}</td>
              <td>{item.title}</td>
              <td>{item.Completed}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
        </form>
      </div>
    );
  }
}


export default Drop_down;