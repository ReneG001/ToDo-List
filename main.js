// Zeile 1 die im local Storage gespeicherten Einträge in einen Array geladen loadedToDos
// Zeile 3 die Einträge werden als neue Elemente in die Liste eingefügt
const loadedToDos = JSON.parse(window.localStorage.getItem("toDos"));
if (Array.isArray(loadedToDos)) {
  for (const loadedToDo of loadedToDos) {
    newElement(loadedToDo);
  }
}

// Macht neuen Listeneintrag wenn du auf Hinzufügen klickst
function newElement(inputValue) {
  var li = document.createElement("li");
  var t = document.createElement("span");
  t.innerText = inputValue;
  t.className = "contentText";
  li.appendChild(t);
  if (inputValue === "") {
    alert("Digga! Du musst schon was schreiben!");
  } else {
    document.getElementById("toDoListe").appendChild(li);
    //loadedToDos.push(inputValue);
  }
  document.getElementById("eingabeText").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Entfernen");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Ändern");
  span.className = "change";
  span.appendChild(txt);
  li.appendChild(span);
  saveToLocalStorage();

  // Streicht den Text durch, um die Aufgabe als erledigt zu markieren
  var listTodos = document.getElementsByClassName("contentText");
  //console.log(listTodos);

  for (let k = 0; k < listTodos.length; k++) {
    listTodos[k].onclick = function (ev) {
      const listElementTitel = ev.target;
      console.log(listTodos);
      // wenn noch kein "line-through" gesetzt ist, dann setzt eins
      if (listElementTitel.style.textDecoration != "line-through") {
        listElementTitel.style.textDecoration = "line-through";
      }
      // mit "checked" wird der Haken vorne gesetzt
      if (listElementTitel.className != "checked") {
        listElementTitel.className = "checked";
      }
    };
  }

  // Mit dem Löschen Knopf, löschst du den Eintrag
  var close = document.getElementsByClassName("close");
  // console.log(close);
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      // bisher wurde nur der li-Punkt unsichtbar gemacht
      // div.style.display = "none";
      // mit der folgenden Zeile wird der li-Punkt gelöscht ganz gelöscht
      // console.log(div); // gibt li aus
      // console.log(div.firstChild.innerText);
      const textDelete = div.firstChild.innerText;

      // es fehlt noch das Löschen aus dem Array für den local storage
      // Funktionsaufruf mit Element, das gelöscht werden soll
      deleteFromLocalStorage(textDelete);
      div.parentNode.removeChild(div);
    };
  }

  // Mit dem Ändern Knopf erscheint ein hidden Textfeld und Hinzufügen-Knopf
  const changeButton = document.getElementsByClassName("change");
  // console.log(changeButton);
  // Erst mal mit prompt
  for (let j = 0; j < changeButton.length; j++) {
    changeButton[j].onclick = () => {
      alert(`Button ${changeButton[j]} was clicked.`);
    };
  }
}

/* var j;
for (j = 0; j < changeButton.length; j++) {
  changeButton[j].onclick = function () {
    //alert('do it');
    document.querySelector("#textAendernFeld").style.visibility = "visible";
    document.querySelector("#textAendernButton").style.visibility = "visible";
    const target = event.target;
    const parent = target.parentElement;
    console.log(target);
    console.log(parent);
    this.parentElement.getElementsByTagName("li").style = "color: black";
  };
} */

// Funktion für Ändernbutton
function newText() {
  alert("clicked");
}

/* Local storage */

function saveToLocalStorage() {
  const toDos = [];
  for (const listElement of document.querySelectorAll("#toDoListe > li")) {
    // console.log(listElement);
    const contentText = listElement.querySelector(".contentText");
    // console.log(contentText);
    toDos.push(contentText.innerText);
  }
  // console.log(toDos);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

// wenn ein Element gelöscht wird, soll es aus dem local storage entfernt werden
function deleteFromLocalStorage(textDelete) {
  /*   
  console.log("was ist im local storage: " + loadedToDos);
  console.log("was soll gelöscht werden: " + textDelete);
  console.log("Länge des local storage: " + loadedToDos.length);
  console.log("position von textDelete " + loadedToDos.indexOf(textDelete)); */
  const deleteFromArray = loadedToDos.indexOf(textDelete);
  if (deleteFromArray !== -1) {
    loadedToDos.splice(deleteFromArray, 1);
  }

  console.log("was ist im local storage: " + loadedToDos);
  // local storage aktualisieren
  localStorage.clear();
  localStorage.setItem("toDos", JSON.stringify(loadedToDos));
}
