import { useState } from "react";

export default function Experience({ onSubmit, experience, saveExperience, deleteExperience }) {
  const [edit, setEdit] = useState("null");
  return (
    <section id="Experience">
      <div id="experience-container">
        <h2>Work Experience</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Position" required></input>
          <input placeholder="Company" required></input>
          <input placeholder="Start Date" required></input>
          <input placeholder="End Date" required></input>
          <input placeholder="Description" required></input>
          <button id="addbtn" className="btn" type="submit">
            Add
          </button>
        </form>
        {experience.map((i) => {
          return (
            <>
              <li key={i.id}>
                <form key={i.id} onSubmit={(e) => saveExperience(i.id, e)}>
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
                    required
                    defaultValue={i.desc}
                  ></input>
                  <button type="submit">Save</button>
                  <button type="button" onClick={(e) => deleteExperience(i.id)}>Delete</button>
                </form>
              </li>
            </>
          );
        })}
      </div>
    </section>
  );
}
