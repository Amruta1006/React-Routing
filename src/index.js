import ReactDom from "react-dom/client";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import Contact from "./views/Contact";


function App() {
  const path = window.location.pathname;
  console.log(path);

  if(path === "/") {
    root.render (<Home />)
  }

   else if(path === "/dashboard") {
      root.render(<Dashboard />)
    }

  else if(path === "/about") {
      root.render(<About/>)
    }

  else if(path === "/contact") {
      root.render(<Contact/>)
    }

  else{
    root.render(<h1>404 Not Found</h1>)
  }

  }
  

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
<>
<App />
</>

);