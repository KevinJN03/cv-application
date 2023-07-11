
export default function Experience({addExperience, onCompany, onExpDesc, onStart, onEnd, onPosition}) {
  function handleClick() {}
  return (
    <section id="Experience">
      <div id="experience-container">
        <h2>Work Experience</h2>
        <form onSubmit={addExperience}>
          <input placeholder="Position" required onChange={onPosition}></input>
          <input placeholder="Company" required onChange={onCompany}></input>
          <input placeholder="Start Date" required onChange={onStart}></input>
          <input placeholder="End Date" required onChange={onEnd}></input>
          <input placeholder="Description" required onChange={onExpDesc}></input>
          <button id="addbtn" className="btn" type="submit" >
        Add
      </button>
        </form>
      </div>
      
    </section>
  );
}
