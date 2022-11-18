import React from 'react';
import './App.css';

function App() {
    const [light, setLight] = React.useState(false);
    console.log(light)
  return (
      <>

    <main className="off">
      <section>
        <div className="dot"></div>
        <button type="button">Turn on/off</button>
      </section>
    </main>
      </>
  );
}

export default App;
/*
1. Begin met het creëren van State, om daarin op te slaan of het licht uit (`false`) of aan (`true`) staat. Belangrijk:
geef de waarde van de state weer in een `console.log`, zodat je het kunt zien wanneer de waarde van de state veranderd.
2. Zorg ervoor dat wanneer de gebruiker op de knop klikt, de State waarde wordt omgedraaid. Dit doe je door de state-setter
methode te gebruiken die je in stap 1 hebt aangemaakt. Dus: is de waarde `false`? Dan wordt het `true`. Is de waarde `true`?
Dan wordt de waarde `false`. Hiervoor zul je [de logica operator !]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) moeten gebruiken. _
TIP:_ test of het ook werkt als je vaker achtereen blijft klikken.
 3. Voeg conditionele styling toe. Wanneer het licht aan staat, moet de class `on` op het **main-element** staan.
 Wanneer het licht uit staat, moet de class `off` op dit element staan.
4. Maak ten slotte de button-tekst dynamisch. Wanneer het licht aan staat, geef je de tekst 'Turn off' weer.
Wanneer het licht uit staat, geef je de tekst 'Turn on' weer.
*/
