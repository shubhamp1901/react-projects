import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'


const App = () => {
  return (
    <>
    {/* <PageNav /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="cities" element={<p>List of cities</p>} index />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>Form Item</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App