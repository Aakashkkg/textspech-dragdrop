import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import Text_speech from "./Text-to-speech";
import "./App.css"
import DragDrop from "./DragDrop";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Text_speech />} />
          <Route path="/dragdrop" element={<DragDrop/>}/>
        </Routes>
      </Router>

    </>
  )


}

export default App;