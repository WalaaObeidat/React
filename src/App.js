
// import logo from './logo.svg';
// import '.App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
// import Body from './components/body';
import Footer from './components/footar'
// import stylesheet from './components/stylesheet'


class App extends React.Component {
  render(){
    return(
      <div >
        <Header/>
        {/* <Body/> */}
        <Footer/>
      </div>
    )
  }
}
export default App ;