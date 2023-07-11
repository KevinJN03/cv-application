
import "./style.css"
export default function PreviewExperience({position, company, start, end, desc}){
    
    return (
        <section id="preview-experience">
            <p>Position: {position}</p>
            <p>Company: {company}</p>
            <p>{start} - {end} </p>
            <p>{desc}</p>
        </section>
    )
}