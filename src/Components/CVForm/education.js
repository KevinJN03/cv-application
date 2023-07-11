
import "./style.css"
export default function Education({addEducation}){

    
    return(
        <section id="Education">
            <h2>Education</h2>
            <form onSubmit={addEducation}>
            <input type="text" placeholder="Course"></input>
            <input type="text" placeholder="University"></input>
            <input type="text" placeholder="Start Year"></input>
            <input type="text" placeholder="Graduated Year"></input>
            <button type="submit" className="btn">Add</button>
            </form>
        </section>
    )
}