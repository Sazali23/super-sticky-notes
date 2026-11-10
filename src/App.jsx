import './App.css'

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new">+ New Note</button>
        <div className="search-field">
          <img
            src="magnifying-glass-solid-full.svg"
            alt="search icon"
            className="search-icon"
          />
          <label className="visually-hidden" htmlFor="search">
            Search notes
          </label>
          <input
            type="text"
            id="search"
            placeholder="ToDo"
            className="search"
          />
        </div>
      </aside>
    </header>
    <ul className="notes-list">
      <li className="note">
        <input
          type="text"
          aria-label="Title"
          placeholder="ToDo Today"
          className="note__title"
        />
        <textarea
          aria-label="Description"
          placeholder="Take a nap!"
          className="note__description"
        />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input
          type="text"
          aria-label="Title"
          placeholder="ToDo Today"
          className="note__title"
        />
        <textarea
          aria-label="Description"
          placeholder="Take a nap!"
          className="note__description"
        />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input
          type="text"
          aria-label="Title"
          placeholder="ToDo Today"
          className="note__title"
        />
        <textarea
          aria-label="Description"
          placeholder="Take a nap!"
          className="note__description"
        />
        <span className="note__delete">X</span>
      </li>
    </ul>
  </div>
);

export default App
