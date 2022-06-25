import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
	return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />


          <FontAwesomeIcon icon={faPen} />

          <FontAwesomeIcon icon={faTrashCan} />

        </h1>
      </header>
      <h1>Task App</h1>
    </div>
    );
}

export default App;
