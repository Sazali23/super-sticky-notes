const Note = (props) => (
  <li className="note">
    <input
      type="text"
      aria-label="Title"
      placeholder="Title"
      className="note__title"
      value={props.note.title}
      readOnly
    />
    <textarea
      aria-label="Description"
      placeholder="Description..."
      className="note__description"
      value={props.note.description}
      readOnly
    />
    <span className="note__delete">X</span>
  </li>
);

export default Note;
