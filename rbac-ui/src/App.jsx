import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./components/Users";
import Roles from "./components/Role";
import './index.css'
import Permissions from "./components/Permissions";
import UserManagement from "./components/UserManagement"; // Import UserManagement component

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/user-management" element={<UserManagement />} /> {/* New Route */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
