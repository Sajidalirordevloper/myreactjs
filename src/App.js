import React, {Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  
  state = {
    person: [
      {name: 'aaaaa', age: 23},
      {name: 'bbbbb' , age: 24},
      {name: 'ccccc', age: 40 }
    ],
    otherstate: 'this set state',
    showPersons: false
  }

  switchNameHandler = (newName)=>{
    // console.log('now on click');
    // this.state.person[0].name = "aqaqaq"
    this.setState ({ 
      person: [
        {name: newName, age: 22},
        {name: newName , age: 25},
        {name: newName, age: 42 }
      ]
    })
  }
  nameChangedHandler =(event) =>{
    this.setState ({ 
      person: [
        {name: 'ali', age: 22},
        {name: event.target.value , age: 25},
        {name: 'sajid', age: 42 }
      ]
    })
  }

  togglePersonsHandler=()=>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render(){
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      boarder: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons ){
      persons = (
        <div>
        <Person name={this.state.person[0].name} 
        age={this.state.person[0].age}
        click={this.switchNameHandler.bind(this, 'maxmium ')}/>
        <Person name={this.state.person[1].name}
         age={this.state.person[1].age}
         click={this.switchNameHandler.bind(this, 'text ')}
         changed={this.nameChangedHandler} >this is small</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} 
        click={this.switchNameHandler.bind(this, 'sum ')}/>
        </div>
      )
    }

  return (
    <div className="App">
      <header className="App-header">
       <h1> hey </h1>
       <p> this main app component</p>
       <button  style={style} onClick={this.togglePersonsHandler}
       > Toggle Person</button>
{/*       
      <div>
       <Person name={this.state.person[0].name} 
       age={this.state.person[0].age}
       click={this.switchNameHandler.bind(this, 'maxmium ')}/>
       <Person name={this.state.person[1].name}
        age={this.state.person[1].age}
        click={this.switchNameHandler.bind(this, 'text ')}
        changed={this.nameChangedHandler} >this is small</Person>
       <Person name={this.state.person[2].name} age={this.state.person[2].age} 
       click={this.switchNameHandler.bind(this, 'sum ')}/>
       </div> */}
       {persons}
      </header>
    </div>
  );
  // return React.createElement('div',{className: 'App'},'h1','react app')
}
}

export default App;
