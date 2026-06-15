import About from "./pages/about/about";
import Home1 from "./pages/home/home.js"
import Contact from "./pages/contact/contact"
//import NotFound from "./pages/notfound/notfound.js"
import NotFound from "./pages/notfound/notfound.js";
import NavBar from "./pages/navbar/Navbar.js";
import HomePage from "./pages/home/home/H.js";
import VerticalNavbar from './pages/navbar/VerticalnNavbar.js'

import {BrowserRouter, Route , Routes} from "react-router-dom"
import LoginForm from "./Auth/Authui.js";
import SketchCanvas from "./fpages/drawing/drawing.js";
import ImageList from "./fpages/image/ImageList.js";
import Signature from "./fpages/signature/SignatureList.js";

import PdfNote from "./fpages/pdf Note Maker/PdfNoteList.js";
import TextExtractor from "./fpages/imageToText/TextToImage.js";
import ImageCompressor from "./fpages/Image compressor/ImageCompressorList.js";

import ImageCollage from "./fpages/imageCollage/imagesToCollage.js";
import ImageCollageList from "./fpages/imageCollage/ImageCollageList.js";

import Image from "./fpages/image/image.js";
import DrawL from "./fpages/drawing/drawingList.js";
import ImageCompressorList from "./fpages/Image compressor/ImageCompressor.js";
import SignatureList from "./fpages/signature/signature.js";
import PdfNList from "./fpages/pdf Note Maker/pdfNote.js"; 
import ImageTotextList from "./fpages/imageToText/ImageToTextList.js";
import ImageToPdfList from "./fpages/ImgToPdf/ImageToPdfList.js";
import ImageToPdfConverter from "./fpages/ImgToPdf/ImageToPdf.js";
import DrawingCanvas from "./fetchDrawings.js";
import App1 from "./pages/home/home/CardLayouts.js";
import EditDrawing from "./fpages/drawing/EditDraw.js";

function App() {
  return (
    <>
        <BrowserRouter>
        
      <div className="App">
        
        <NavBar/>
        <div id = "page-body">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/v" element={<VerticalNavbar/>}></Route>
            <Route path="/fetch" element={<DrawingCanvas/>}></Route>
            <Route path="/fetch/*" element={<DrawingCanvas/>}></Route>

            <Route path="/Hslides" element={<App1/>}></Route>


            <Route path="/h1" element={<Home1/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>

            <Route path="/home" element={<Home1/>}></Route>

            <Route path="/auth" element={<LoginForm/>}></Route>

            <Route path="/DrawingList" element={<DrawL/>}></Route>
            <Route path="/DrawingList/Draw" element={<SketchCanvas/>}></Route>
            <Route path="/DrawingList/Draw/:drawingId" element={<EditDrawing/>}></Route>

            <Route path="/ImageList" element={<ImageList/>}></Route>    
            <Route path="/ImageList/Image" element={< Image/>}></Route>

            <Route path="/PdfNList" element={<PdfNList/>}></Route>
            <Route path="/PdfNList/PdfN" element={<PdfNote/>}></Route>

            <Route path="/SignatureList" element={<SignatureList/>}></Route>
            <Route path="/SignatureList/Signature" element={<Signature/>}></Route>

            <Route path="/ImageToPdfList" element={<ImageToPdfList/>}></Route>
            <Route path="/ImageToPdfList/ImageToPdf" element={<ImageToPdfConverter/>}></Route>
            
            <Route path="/ImageToTextList" element={<ImageTotextList/>}></Route>
            <Route path="/TextToImageList/ImageToText" element={<TextExtractor/>}></Route>
            
            <Route path="/ImageCollageList" element={<ImageCollageList/>}></Route>
            <Route path="/ImageCollageList/ImageCollage" element={<ImageCollage/>}></Route>

            <Route path="/ImageCompressorList" element={<ImageCompressorList/>}></Route>
            <Route path="/ImageCompressorList/ImageCompressor" element={<ImageCompressor/>}></Route>
            

          </Routes>
          </div></div>
        </BrowserRouter>
      

    </>
  );
}



export default  App ;
