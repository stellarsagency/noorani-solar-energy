import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PlaceholderPage from './components/PlaceholderPage'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
