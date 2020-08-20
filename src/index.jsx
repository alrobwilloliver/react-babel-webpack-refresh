const React = require('react');
const ReactDom = require('react-dom')

const Hello = (props) => {
    return <div>Hello, {props.name}</div>
}

const root = document.getElementById('root');
if (root) {
    ReactDom.render(<Hello name='Alisa' />, root)
}
