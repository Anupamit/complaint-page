import Editcomplaint from './Editcomplaint';
import Addcomplaint from './Addcomplaint';
import Home from './Home';
import ViewComplaint from './ViewComplaint';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="editcomplaint" element={<Editcomplaint />} />
        <Route path="addcomplaint" element={<Addcomplaint />} />
        <Route path="viewcomplaints" element={<ViewComplaint />} />
    </Routes>
  </BrowserRouter>
  );
}
// complaint type
// acedmics, manegent, bus, fee, class, sports, other
// Date, con. person,discription
// delete,add,edit   

export default App;
