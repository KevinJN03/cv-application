
export default function PreviewEducation({ id,course, university, end, start }) {
  return (
    <li id={id}>
      <p>{course}</p>
      <p>{university}</p>
      <p>{start}</p>
      <p>{end}</p>
    </li>
  );
}
