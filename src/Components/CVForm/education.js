

export default function Education({onSubmit}){

    
    return(
        <section id="Education">
            <h2>Education</h2>
            <form onSubmit={onSubmit}>
            <input type="text" placeholder="Course"></input>
            <input type="text" placeholder="University"></input>
            <input type="text" placeholder="Start Year"></input>
            <input type="text" placeholder="Graduated Year"></input>
            <button type="submit" className="btn">Add</button>
            <button type="submit" className="btn">Delete</button>
            </form>
        </section>
    )
}