// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Badge, Alert, BackTop } from 'antd';
// const { Badge } = antd;
// import Button from 'antd/es/button';
// import 'antd/dist/antd.css';
// import { Line, Circle } from 'rc-progress';
import { Line, Circle } from './progress';
import Checkbox from './checkbox';

function App() {
  return (
    <div style={{ "backgroundColor": "black", width: "100%", "height": "100%" }}>
      {/* <Button type="primary">Primary</Button> */}
      {/* <BackTop/> */}
      {/* <Badge count={43}>
        <div style={{"backgroundColor": "red", width: "300px", "height": "300px"}}>fgfgh</div>
      </Badge> */}
      {/* <Badge count={5}/>
      <Alert message="fddfg"/> */}
      {/* <BackTop /> */}
      <div>
        <Checkbox value={"kekwkw"} />
      </div>

      {/* <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" trailColor="#D9D9D9" /> */}
      {/* <Circle percent={25} strokeWidth={4} strokeColor="#D3D3D3" trailColor="#D9D9D9" /> */}
      {/* <div style={{"backgroundColor": "red", width: "300px", "height": "1500px"}}>fgfgh</div> */}
      {/* <a href="#" className="head-example" /> */}
      {/* </Badge> */}
    </div>
  );
}

export default App;
