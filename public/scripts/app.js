'use strict';

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var visibility = false;
var appRoot = document.getElementById('app');

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle!'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here are some details!'
            )
        )
    );

    ReactDOM.render(jsx, appRoot);
};

render();
