const Header = () => (
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
);

export default Header;
