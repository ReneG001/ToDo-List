function App() {
    function newElement(inputValue) {
        const li = document.createElement("li");
        const t = document.createElement("span");
        t.innerText = inputValue;
        t.className = "contentText";
        li.appendChild(t);
        if (inputValue === "") {
            alert("Digga! Du musst schon was schreiben!");
        } else {
            document.getElementById("toDoListe").appendChild(li);
        }
        document.getElementById("eingabeText").value = "";

        const span = document.createElement("SPAN");

        const txt = document.createTextNode("Entfernen");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                const div = this.parentElement;
                div.style.display = "none";
            };
        }

        const span2 = document.createElement("SPAN");
        const txt2 = document.createTextNode("Ändern");
        span2.className = "change";
        span2.appendChild(txt2);
        li.appendChild(span2);
        saveToLocalStorage();
    
        // Fügt jedem Eintrag einen Ändernknopf hinzu
        const myNodelist = document.getElementsByTagName("LI");
        
        for ( let i = 0; i < myNodelist.length; i++) {
            const span = document.createElement("SPAN");
            const txt = document.createTextNode("Ändern");
            span.className = "change";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }


// Fügt jedem Eintrag den Löschenknopf hinzu
        const myNodelist2 = document.getElementsByTagName("LI");
        
        for (let i = 0; i < myNodelist2.length; i++) {
            const span = document.createElement("SPAN");
            const txt = document.createTextNode("Entfernen");
            span.className = "close";
            span.appendChild(txt);
            myNodelist2[i].appendChild(span);
        }

// Mit dem Löschen Knopf, löschst du den Eintrag
        const close = document.getElementsByClassName("close");
        
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                const div = this.parentElement;
                div.style.display = "none";
            };
        }

// Macht ein Häkchen wenn du auf ein Listeneintrag klickst
        const list = document.querySelector("ul");
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


// Mit dem Ändern Knopf erscheint ein hidden Textfeld und Hinzufügen-Knopf
        const changeButton = document.getElementsByClassName("change");
        
        for (let j = 0; j < changeButton.length; j++) {
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


    }

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
    React.useEffect(() => {
        const loadedToDos = JSON.parse(window.localStorage.getItem("toDos"));
        for (const loadedToDo of loadedToDos) {
            newElement(loadedToDo);
        }



    }, [] )

    return (
        <div className="container">
            <div className="row">
                <div className="col-2"/>
                <div className="col-12 col-md-8 theshadow">
                    <header>
                        <h2>Meine To-Do-Liste</h2>
                        <div className="headerOben">
                            <input type="text" id="eingabeText" placeholder="Aufgabe ..."/>
                            <span
                                onClick={() => newElement(document.getElementById('eingabeText').value)}
                                className="addBtn"
                            >
            Hinzufügen
          </span>
                        </div>


                    </header>
                    <ul id="toDoListe"/>
                    <footer className="footer">
                        <p>© bei WDG#005 Gruppe 4 / Sarah, René und Romano</p>
                    </footer>
                </div>
            </div>
            <div className="col-2"/>
        </div>

    )

}

const domContainer = document.querySelector('#App');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));