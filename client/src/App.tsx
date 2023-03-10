import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { UserProvider } from "./contextapi/UserContext";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import SubscriberSecureLayout from "./layouts/SubscriberSecureLayout";
import AdminSecureLayout from "./layouts/AdminSecureLayout";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected route for subscriber*/}

          <Route
            path="/dashboard"
            element={
              <SubscriberSecureLayout>
                <Dashboard />
              </SubscriberSecureLayout>
            }
          />

          <Route
            path="/profile"
            element={
              <SubscriberSecureLayout>
                <Profile />
              </SubscriberSecureLayout>
            }
          />

          {/* Protected route for only admin*/}

          <Route
            path="/admin"
            element={
              <AdminSecureLayout>
                <Admin />
              </AdminSecureLayout>
            }
          />


        </Routes>
        <ToastContainer autoClose={8000} />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
