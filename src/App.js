import React from 'react';
import logo from './logo.svg';
import './App.css';
const Notion = require("notion-api-js").default;
 
// require syntax
 
const notion = new Notion({
    token: "a274d3f85734e57851cf248b157f15296e27c1a82cf12f51f841df2d468d5da362dfb8b68a4d2e1b2a7c3d9c1f15c1dece232263514dee713ac86b30e8688a2fe205a7ce44d39beaf8fe1ec4014b",
    options: {
      colors: {
        orange: 'tomato'
      },
      pageUrl: '/pengyistudio/',
    }
});



notion.getPagesByIndexId('33069c87-8c01-45c4-b5c6-6d1ed937bde5').then(page => {
    console.log(page)
});

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
