import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Footer } from './AppComponents/Footer';
import { Header } from './AppComponents/Header';
import { Howitworks } from './AppComponents/Howitworks';
import { Othertools } from './AppComponents/Othertools';
import TextForm from './AppComponents/TextForm';

function App() {
  return (
    <>
      <Header title="Text Mod"/>
      <TextForm Textareaheading="Enter Text Below to modify"/>
      <Footer />
      {/* <BrowserRouter>
        <Header title="Text Mod"/>
        <Routes>
          <Route exact path="/" element={
            <TextForm Textareaheading="Enter Text Below to modify"/>
          } />
          <Route exact path="/how-it-works" element={<Howitworks />} />
          <Route exact path="/other-tools" element={<Othertools />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      
       
    </>
  );
}

export default App;
