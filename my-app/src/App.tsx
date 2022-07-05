// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Badge, Alert } from 'antd';
// const { Badge } = antd;
import Button from 'antd/es/button';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      {/* <BackTop/> */}
      {/* <Badge count={43}>
        <div style={{"backgroundColor": "red", width: "300px", "height": "300px"}}>fgfgh</div>
      </Badge> */}
      <Badge count={5}/>
      <Alert message="fddfg"/>
      {/* <a href="#" className="head-example" /> */}
    {/* </Badge> */}
    </div>
  );
}

export default App;
