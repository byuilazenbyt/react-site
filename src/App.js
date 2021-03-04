import React from 'react';
import { Header } from "./template/Header";
import { SideBar } from "./template/Sidebar";
import Row from 'react-bootstrap/Row';

function App() {
  return (
      <div className="app">
       <Header/>
       <div className="container-fluid">
           <Row>
               <SideBar/>
           </Row>
       </div>
      </div>
  );
}



export default App;
