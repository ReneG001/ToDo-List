const loadedToDos = JSON.parse(window.localStorage.getItem("toDos"));
for (const loadedToDo of loadedToDos) {
    newElement(loadedToDo);
}

// Fügt jedem Eintrag einen Ändernknopf hinzu
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Ändern");
  span.className = "change";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function newText() {}

/* // Mit dem Ändern Knopf, änderst du den Eintrag
var change = document.getElementsByClassName("change");
var i;
for (i = 0; i < change.length; i++) {
    change[i].onclick = function() {
        alert("Du änderst hier gar nix!");
    }
} */

// Fügt jedem Eintrag den Löschenknopf hinzu
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Entfernen");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Mit dem Löschen Knopf, löschst du den Eintrag
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Macht ein Häkchen wenn du auf ein Listeneintrag klickst
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

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
  }
  document.getElementById("eingabeText").value = "";

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("Entfernen");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Ändern");
  span.className = "change";
  span.appendChild(txt);
  li.appendChild(span);
  saveToLocalStorage();
}

// Mit dem Ändern Knopf erscheint ein hidden Textfeld und Hinzufügen-Knopf
const changeButton = document.getElementsByClassName("change");
var j;
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
}

function newText() {
  //var li = document.getElementsByTagName("li");
  //var inputValue = document.getElementById("textAendernFeld").value;
}

/* Local storage */

// erzeugt einen Eintrag oder überschreibt den Eintrag
// ohne Warnung, wenn der key schon existiert
// localStorage.setItem(key, value)

//gibt null zurück, wenn der key nicht existiert
// localStorage.getItem(key)
//localStorage.getItem(document.getElementById("eingabeText").value);

//löscht einen Eintrag
// localStorage.removeItem(key);

// Verfügbarer Speicherplatz für das Storage-Objekt
// nur IE
// localStorage.remainingSpace();

//löscht den Speicher
// localStorage.clear();

function saveToLocalStorage() {
  const toDos = [];
  for (const listElement of document.querySelectorAll("#toDoListe > li")) {
    // console.log(listElement);
    const contentText = listElement.querySelector(".contentText");
    // console.log(contentText);
    toDos.push(contentText.innerText);
  }
  console.log(toDos);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
