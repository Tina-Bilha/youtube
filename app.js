import React, {useState} from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = (props) => {
  
   const [value, setValue] = useState("");
  
  return(
    <div>
    <Header value={value}/>
  <NavBar />
      <SmallNav />
      <CurrentVideo />
      <Content />
      <InputHeader value={value} onChange={newValue =>{setValue(newValue)}} />
      </div>
  )
}

const NavBar = () => {
  
  return (
    <ul className="topnav">
      <li><a className="active" href="#"><i class="fa fa-home"></i>Home</a></li>
      
      <li><a href="#">Links</a></li>
      <li><a href="#">My Videos</a></li>
            <li><a href="#">Manage Videos</a></li>
                  <li><a href="#">music</a></li>
      </ul>
  
  )
}

const SmallNav = () => {
  return (
  <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <a href="#">Home</a>
        <a href="#">My Videos</a>
        <a href="#">Links</a>
        <a href="#">Manage Videos</a>
        <a href="#">Parents</a>
      </div>
       </div>
 
  )
}


const Header = ({value}) => {
  return (
  <div className="header">
      <h1>{value}</h1>
      <p>Working on responsiveness</p>
      </div>
  )
}

const Content = () => {
  return(
  <div className="row">
    <div className="column">
      <div className="card">
      <h2>Column One</h2>
     <iframe className="videoFrame" 
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
      </div>
    </div>
      <div className="column">
        <div className="card">
        <h2>Column Two</h2>
           <iframe className="videoFrame" 
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </div>
      </div>
       <div className="column">
         <div className="card">
        <h2>Column Three</h2>
           <iframe className="videoFrame"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
         </div>
      </div>
       <div className="column">
        <div className="card">
        <h2>Column Four</h2>
           <iframe className="videoFrame"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </div>
      </div>
    </div>
    )
}

const InputHeader = ({value, onChange}) => {
  
  return(
  <input className="inputbar" placeholder="Please place header here..." type="text" value={value} onChange={e => onChange(e.target.value)}/>
  )
}


const CurrentVideo = () => {
  
  return (
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Ir_1tqV9ICk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
