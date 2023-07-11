export default function Experience({
  onSubmit,
  experience,
  saveExperience,
  deleteExperience,
}) {
  return (
    <section id="Experience">
      <h2
        style={{
          margin: "20px 0",
        }}
      >
        Work Experience
      </h2>
      {experience.map((i) => {
        return (
          <div key={i.id}>
            <li key={i.id}>
              <form key={i.id} onSubmit={(e) => saveExperience(e, i.id)}>
                <input
                  placeholder="Position"
                  required
                  defaultValue={i.position}
                ></input>
                <input
                  placeholder="Company"
                  required
                  defaultValue={i.company}
                ></input>
                <input
                  placeholder="Start Date"
                  required
                  defaultValue={i.start}
                ></input>
                <input
                  placeholder="End Date"
                  required
                  defaultValue={i.end}
                ></input>
                <input
                  placeholder="Description"
                  id="description"
                  required
                  defaultValue={i.desc}
                ></input>
                <div className="btn-container">
                  <button type="submit" className="btn btn-save">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-delete"
                    onClick={(e) => deleteExperience(i.id)}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </li>
          </div>
        );
      })}
      <form onSubmit={onSubmit}>
        <input placeholder="Position" required></input>
        <input placeholder="Company" required></input>
        <input placeholder="Start Date" required></input>
        <input placeholder="End Date" required></input>
        <textarea
          placeholder="Description"
          className="description"
          required
        ></textarea>
        <button className="btn add-btn" type="submit">
          Add
        </button>
      </form>
    </section>
  );
}
