import React from 'react';
import { Header } from "./template/Header";
import { SideBar } from "./template/Sidebar";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Banner from './img/iStock-1210526452.jpg';

function App() {
  return (
      <div className="app">
       <Header/>
       <div className="container-fluid">
           <Row>
               <SideBar/>
               <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                       <h1 className="h2">Home</h1>
                   </div>
                   <Image className="img-fluid rounded shadow" src={Banner} alt="guy holding phone"/>
               </main>
           </Row>
       </div>
      </div>
  );
}



export default App;
