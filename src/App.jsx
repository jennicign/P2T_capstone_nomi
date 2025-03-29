import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Menu from './pages/Menu';
import OrdersSuccess from './pages/OrdersSuccess';
import OrdersCancel from './pages/OrdersCancel';
import UserProfile from './pages/UserProfile';
import RestaurantDashboard from './pages/RestaurantDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders/success" element={<OrdersSuccess />} />
        <Route path="/orders/cancel" element={<OrdersCancel />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
