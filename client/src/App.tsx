import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import Dashboard from "./components/navigationComponents/dashboard/dashboard.component";
import Admin from "./components/navigationComponents/admin/admin.component";
import Performance from "./components/navigationComponents/performance/performance.component";
import Overview from "./components/navigationComponents/overview/overview.component";
import Daily from "./components/navigationComponents/daily/daily.component";
import Monthly from "./components/navigationComponents/monthly/monthly.component";
import Breakdown from "./components/navigationComponents/breakdown/breakdown.component";
import Products from "./components/navigationComponents/products/products.component";
import Customers from "./components/navigationComponents/customers/customers.component";
import Transactions from "./components/navigationComponents/transactions/transactions.component";
import Geography from "./components/navigationComponents/geography/geography.component";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import './assets/cuberto.scss'

function App() {
  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower({
    
    speed: 0.6
});
  
  return (
    <div className=" h-[100vh] overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to='/dashboard' replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
