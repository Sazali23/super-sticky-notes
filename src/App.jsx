import { Component } from "react";
import "./App.css";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div className="app">
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
        />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
