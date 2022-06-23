function App (){
    return (
        <p>Test</p>
    )
}
const domContainer = document.querySelector('#App');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));