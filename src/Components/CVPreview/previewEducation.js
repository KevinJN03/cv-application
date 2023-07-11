export default function PreviewEducation({
  id,
  course,
  university,
  end,
  start,
}) {
  return (
    <li id={id}>
      <div id="edu-info">
        <p>
          <strong>{course}</strong>
        </p>
        <p>
          <strong>{university}</strong> | {start} - {end}
        </p>
      </div>
    </li>
  );
}
