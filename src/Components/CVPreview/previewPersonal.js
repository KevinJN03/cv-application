
import "./style.css"
export default function PreviewPersonal({firstName, lastName,title, address, email, phoneNumber, description}){

    return(
        <div id="preview-personal">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <h2>{title}</h2>
            <p>{address}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{description}</p>
        </div>
    )

}