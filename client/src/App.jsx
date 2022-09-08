import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Manager from "./components/Manager"
import Detail from "./Detail"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Manager />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
