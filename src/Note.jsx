const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
  const clickDelete = () => props.remove(props.note.id);
  return (
    <li className="note">
      <input
        type="text"
        aria-label="Title"
        placeholder="Title"
        className="note__title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        aria-label="Description"
        placeholder="Description..."
        className="note__description"
        value={props.note.description}
        onChange={updateDescription}
      />
      <span onClick={clickDelete} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
