import React from "react";
// import MemesData from "./MemesData";

function MainContent() {
  const [meme, setMeme] = React.useState({
    upperText: "",
    lowerText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  function getMemeImage() {
    const randomMemeNumb = Math.floor(Math.random() * allMeme.length);
    const randomMemeObj = allMeme[randomMemeNumb];
    const URL = randomMemeObj.url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: URL }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((apiData) => setAllMeme(apiData.data.memes));
  }, []);

  return (
    <main className="main--container">
      <div className="form">
        <input
          name="upperText"
          className="form--input"
          placeholder="Upper Text"
          type="text"
          value={meme.upperText}
          onChange={handleChange}
        />
        <input
          name="lowerText"
          className="form--input"
          placeholder="Bottom Text"
          type="text"
          value={meme.lowerText}
          onChange={handleChange}
        />
        <button className="form--btn" onClick={getMemeImage}>
          Get a New Meme Image 🖼
        </button>
      </div>
      <div className="img--container">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.upperText}</h2>
        <h2 className="meme--text bottom">{meme.lowerText}</h2>
      </div>
    </main>
  );
}

export default MainContent;
