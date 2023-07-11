import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function PreviewPersonal({
  firstName,
  lastName,
  title,
  address,
  email,
  phoneNumber,
  description,
}) {
  return (
    <div id="preview-personal">
      <div className="info">
        <div id="info-1">
          <p id="name">
            {firstName} {lastName}
          </p>
          <h2 id="title">{title}</h2>
        </div>
        <div id="info-2">
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> {address}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> {email}
          </p>
        </div>
      </div>
      <hr></hr>
      <p>{description}</p>
    </div>
  );
}
