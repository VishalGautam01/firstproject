/*
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Hello, I'm a React App</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );  
}

export default App;
*/

import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    // const App = (props) => {
    // const [personsState, setPersonsState] = useState({
    persons: [
      { id: "hdfkhd", name: "Vishal", age: 32 },
      { id: "ururuu", name: "Molly", age: 26 },
      { id: "nmzcvnn", name: "Mia", age: 28 },
    ],
    otherState: "some other value",
    showPersons: false    
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  // const [otherState, setOtherState] = useState("some other value");

  // console.log(personsState, otherState);

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

    render () { 
    let persons =  null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}> 
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
              </ErrorBoundary>
          })}
        </div>
      );

    btnClass= classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push("classes.red"); //assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push("classes.bold"); // assignedClasses = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}> This is really working! </p>
        <button className={btnClass.join(" ")} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div> 
    );
  }
}

export default App;
