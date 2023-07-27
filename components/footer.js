import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faInstagram, faTwitter, faFacebook);

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
      <p id="copyright">
          Copyright © {currentYear}, ReWorked LLC. All Rights Reserved.{" "}</p>
      <div className="socialMediaIcons">
        <FontAwesomeIcon className="icon" id="twitter" icon={faTwitter} />
        <FontAwesomeIcon className="icon" id="facebook" icon={faFacebook} />
        <FontAwesomeIcon className="icon" id="instagram" icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}
