// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Products from "./pages/Products";
import OrderCreate from "./pages/OrderCreate";
import InvoiceCreate from "./pages/InvoiceCreate";
import OrdersList from "./pages/OrdersList";
import InvoicesList from "./pages/InvoicesList";
import Home from "./pages/Home";

// COMPONENTS
import Header from "./components/layout/Header";
import useRandomImage from "./hooks/useRandomImage";

function App() {
  const bgImage = useRandomImage();

  return (
    <Router>
      <div className="max-w-screen-lg mx-auto font-body">
        <div
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ordercreate" element={<OrderCreate />} />
            <Route path="/orderslist" element={<OrdersList />} />
            <Route path="/invoicecreate" element={<InvoiceCreate />} />
            <Route path="/invoiceslist" element={<InvoicesList />} />
            {/* Define other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
