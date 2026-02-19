import { Link } from "react-router-dom";

function Main_Button_KF() {
  return (
    <Link to="/kf">
      <button id="umrechner link" className="link button mainPage">
        Kreisflächen-Berechnung
      </button>
    </Link>
  );
}

export default Main_Button_KF;
