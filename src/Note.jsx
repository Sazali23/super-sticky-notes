const Note = () => (
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
);

export default Note;
