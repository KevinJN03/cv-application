import { useState } from "react";
import PersonalInfo from "./Components/CVForm/PersonalInfo";
import Experience from "./Components/CVForm/experience";
import Education from "./Components/CVForm/education";
import Preview from "./Components/CVPreview/preview";
import { v4 as uuidv4 } from "uuid";

export default function Content() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);
  const [decription, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

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
    setExperience([...experience, newExperience]);
    clear(e);
  }

  function clear(e) {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
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
    clear(e);
  }

  function saveEducation(e, id) {
    e.preventDefault();

    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const updateEdu = { course, university, start, end };
    setEducation(
      education.map((edu) => {
        if (edu.id === id) {
          return { ...edu, ...updateEdu };
        } else {
          return;
        }
      })
    );
  }
  function deleteEducation(id) {
    setEducation((currentEducation) => {
      return currentEducation.filter((edu) => edu.id !== id);
    });
  }

  return (
    <>
    <div className="content">
      <section className="cv-form">
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
        <Education
          addEducation={addEducation}
          education={education}
          saveEducation={saveEducation}
          deleteEducation={deleteEducation}
        />
      </section>
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
      </div>
    </>
   
  );
}