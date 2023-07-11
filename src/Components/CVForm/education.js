export default function Education({
  addEducation,
  education,
  deleteEducation,
  saveEducation,
}) {
  return (
    <section id="Education">
      <h2
        style={{
          margin: "20px 0",
        }}
      >
        Education
      </h2>
      {education.map((edu) => {
        return (
          <li key={edu.id}>
            <form onSubmit={(e) => saveEducation(e, edu.id)}>
              <input
                type="text"
                placeholder="Course"
                defaultValue={edu.course}
              ></input>
              <input
                type="text"
                placeholder="University"
                defaultValue={edu.university}
              ></input>
              <input
                type="text"
                placeholder="Start Year"
                defaultValue={edu.start}
              ></input>
              <input
                type="text"
                placeholder="Graduated Year"
                defaultValue={edu.end}
              ></input>
              <div className="btn-container">
                <button type="submit" className="btn btn-save">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={() => deleteEducation(edu.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </li>
        );
      })}
      <form onSubmit={addEducation}>
        <input type="text" placeholder="Course"></input>
        <input type="text" placeholder="University/School"></input>
        <input type="text" placeholder="Start Year"></input>
        <input type="text" placeholder="Graduated Year"></input>
        <button type="submit" className="btn add-btn">
          Add
        </button>
      </form>
    </section>
  );
}
