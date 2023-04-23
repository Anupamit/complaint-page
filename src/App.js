import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Editcomplaint from "./Components/Editcomplaint"
import Addcomplaint from "./Components/Addcomplaint"
import ViewComplaint from "./Components/ViewComplaint"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editcomplaint" element={<Editcomplaint />} />
        <Route path="/addcomplaint" element={<Addcomplaint />} />
        <Route path="/viewcomplaints" element={<ViewComplaint />} />
    </Routes>
  </BrowserRouter>
  );
}
// complaint type
// acedmics, manegent, bus, fee, class, sports, other
// Date, con. person,discription
// delete,add,edit   

export default App;
