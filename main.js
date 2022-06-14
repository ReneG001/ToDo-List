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


function newText() {

}

// Fügt jedem Eintrag den Löschenknopf hinzu
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Löschen");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Mit dem Löschen Knopf, löschst du den Eintrag
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}







// Macht ein Häkchen wenn du auf ein Listeneintrag klickst
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Macht neuen Listeneintrag wenn du auf Hinzufügen klickst
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("eingabeText").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Digga! Du musst schon was schreiben!");
    } else {
        document.getElementById("toDoListe").appendChild(li);
    }
    document.getElementById("eingabeText").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Löschen");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Ändern");
    span.className = "change";
    span.appendChild(txt);
    li.appendChild(span);


}


// Mit dem Ändern Knopf erscheint ein hidden Textfeld und Hinzufügen-Knopf
const changeButton = document.getElementsByClassName("change");
var j;
for (j = 0; j < changeButton.length; j++) {
    changeButton[j].onclick = function() {
        //alert('do it');
        document.querySelector("#textAendernFeld").style.visibility = "visible";
        document.querySelector("#textAendernButton").style.visibility = "visible";

    }
}

function newText() {
    //var li = document.getElementsByTagName("li");
    //var inputValue = document.getElementById("textAendernFeld").value;

}