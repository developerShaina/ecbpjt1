import Header from './components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Layout from './components/design/Layout';

function App() {
  return (
   <>
   <Header/>
   <div className='main-container'>
  <Layout/>
   </div>
   <Footer/>
   </>
  )
}

export default App;
