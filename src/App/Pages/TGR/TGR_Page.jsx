import "../../../index.css";

function TGR_Page() {
  return (
    <>
      <header>
        <div>
          <h1>Trinkgeld- und Aufteilungsrechner</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div>
            <div>
              <label htmlFor="B_IN">Betrag: </label>
              <input type="text" id="B_IN" placeholder="zB: 100" />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="Pr_IN">Prozent: </label>
              <input type="text" id="Pr_IN" placeholder="Prozent eingeben" />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="Pe_IN">Anzahl Personen: </label>
              <input type="text" id="Pe_IN" placeholder="Personen eingeben" />
              <br />
            </div>
          </div>
          <div>
            <div>
              <p id="NaN-Error_OUT"></p>
              <br />
            </div>
            <div className="container buttons-left">
              <button className="link button mainPage">Submit</button>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="PrW_OUT">Prozentwert:</label>
              <input
                type="text"
                id="PrW_OUT"
                placeholder="Prozentwert"
                readOnly
              />
              <br />
            </div>
            <div>
              <label htmlFor="Ges_OUT">Gesamtbetrag:</label>
              <input
                type="text"
                id="Ges_OUT"
                placeholder="Gesamtbetrag"
                readOnly
              />
              <br />
            </div>
            <div>
              <label htmlFor="PP_OUT">Betrag pro Person:</label>
              <input
                type="text"
                id="PP_OUT"
                placeholder="Betrag pro Person"
                readOnly
              />
              <br />
              <br />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <div>
            <label htmlFor="R_IN">Rundungsoptionen: </label>
            <select id="R_IN">
              <option value="0">Keine Rundung (Standart)</option>
              <option value="3">Auto (Empfohlen)</option>
              <option value="1">Aufrunden</option>
              <option value="2">Abrunden</option>
            </select>
            <br />
          </div>
          <div>
            <p>&copy; 2025 Mathe Webseite. Alle Rechte vorbehalten.</p>
            <p>
              Pieti30 on GitHub:{" "}
              <a href="https://github.com/pieti30tv">Pieti30</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TGR_Page;
