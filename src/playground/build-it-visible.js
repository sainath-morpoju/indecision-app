

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

let visibility = false;
const appRoot = document.getElementById('app');

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle!</h1>
            <button onClick={toggleVisibility} > {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Here are some details!</p>
                </div>
            )}
        </div>
    );   
    
    ReactDOM.render(jsx,appRoot);
}

render();
