
export default function PreviewExperience({id ,position, company, start, end, desc}){
    
    return (
        <section id="preview-experience">
            <li key={id}>
            <p>Position: {position}</p>
            <p>Company: {company}</p>
            <p>{start} - {end} </p>
            <p>{desc}</p>
            </li>
        </section>
    )
}
