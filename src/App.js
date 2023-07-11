import { useState } from "react";
import PersonalInfo from "./Components/CVForm/PersonalInfo";
import Experience from "./Components/CVForm/experience";
import Education from "./Components/CVForm/education";
import Preview from "./Components/CVPreview/preview";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);
  const [decription, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState([]);

  function onFirstName(event) {
    setFirstName(event.target.value);
  }
  function onLastName(event) {
    setLastName(event.target.value);
  }

  function onTitle(event) {
    setTitle(event.target.value);
  }

  function onEmail(event) {
    setEmail(event.target.value);
  }
  function onDescription(event) {
    setDescription(event.target.value);
  }

  function onAddress(event) {
    setAddress(event.target.value);
  }
  function onPhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function addExperience(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const desc = e.target[4].value;

    let newExperience = { id, position, company, start, end, desc };

    console.log(newExperience);
    setExperience([...experience, newExperience]);
    console.log("experience", experience);
    setForm([...form, { Experience }]);
    console.log("form: ", form);
    console.log("lwfsydfhhisdf");
  }

  function deleteExperience(id) {
    console.log(id);
    setExperience((currentExperience) => {
      return currentExperience.filter((exp) => exp.id !== id);
    });
  }

  function saveExperience(id, e) {
    e.preventDefault();

    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const desc = e.target[4].value;
    let updateExp = { position, company, start, end, desc };
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, ...updateExp };
        }
      })
    );
  }

  function addEducation(e) {
    e.preventDefault();
    console.log("Clicked on Add education");
    const id = uuidv4();
    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newEducation = { id, course, university, start, end };
    setEducation([...education, newEducation]);
  }

  return (
    <>
      <PersonalInfo
        onFirstName={onFirstName}
        onLastName={onLastName}
        onTitle={onTitle}
        onEmail={onEmail}
        onDescription={onDescription}
        onAddress={onAddress}
        onPhoneNumber={onPhoneNumber}
      />
      <Experience
        onSubmit={addExperience}
        deleteExperience={deleteExperience}
        experience={experience}
        saveExperience={saveExperience}
      />
      <Education onSubmit={addEducation} />
      <Preview
        firstName={firstName}
        lastName={lastName}
        title={title}
        phoneNumber={phoneNumber}
        description={decription}
        address={address}
        email={email}
        experience={experience}
        education={education}
      />
    </>
  );
}

export default App;
