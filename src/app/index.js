import React, {Component} from 'react';
import './app.css';

const title = 'React-Webpack-Babel Setup is up and running';

// stateless function method

// const App = (props) => {
//     return (
//         <div>{title}</div>
//     );
// }
// export default App;

export default class App extends Component {
    render() {
        return (
            <div>{title}</div>
        );
    }
}