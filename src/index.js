import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ObjectId from './utilities/objectId';
import Store from './store';
const rootElement = document.createElement("div"), rootElementID = ObjectId();
rootElement.id = rootElementID;
document.body.appendChild(rootElement);

ReactDOM.render(<App store={Store} />, document.getElementById(rootElementID));
registerServiceWorker();
