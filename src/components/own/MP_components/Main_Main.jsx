import Main_Button_TGR from "./Buttons/Main_Button_TGR.jsx";
import Main_Button_KF from "./Buttons/Main_Button_KF.jsx";
import Main_Button_MEH from "./Buttons/Main_Button_MEH.jsx";

function Main() {
  return (
    <main>
      <div className="container buttons">
        <Main_Button_TGR />
        <Main_Button_KF />
        <Main_Button_MEH />
      </div>
    </main>
  );
}

export default Main;

/*
<Button text="TGR Rechner" />
<Button text="Kreisflächen-Berechnung" />
<Button text="Dreisatzrechner" />
<Button text="Maßeinheiten-Umrechnung" />
*/
