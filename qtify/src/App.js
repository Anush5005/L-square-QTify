import "./App.css";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Section from "./components/section";
import { useEffect, useState } from "react";
import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Herosection />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
    </>
  );
}

export default App;
