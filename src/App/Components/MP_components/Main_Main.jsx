import Button from "../Main_Components/Button.jsx";

function Main() {
  return (
    <main>
      <div className="container buttons">
        <Button text="TGR Rechner" />
        <Button text="Kreisflächen-Berechnung" />
        <Button text="Dreisatzrechner" />
        <Button text="Maßeinheiten-Umrechnung" />
      </div>
    </main>
  );
}

export default Main;
