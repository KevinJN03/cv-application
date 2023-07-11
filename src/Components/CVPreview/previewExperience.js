export default function PreviewExperience({
  id,
  position,
  company,
  start,
  end,
  desc,
}) {
  return (
    <section id="preview-experience">
      <li key={id}>
        <div id="info">
          <p>
            <strong>{position}</strong>
          </p>
          <p>
            <strong>{company}</strong> | {start} - {end}
          </p>
        </div>

        <p>{desc}</p>
      </li>
    </section>
  );
}
