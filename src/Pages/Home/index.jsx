import React, { useEffect, useState } from "react";
import { MemeCard, Shimmer } from "../../components";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const res = await fetch("https://meme-api.com/gimme/20");
    const data = await res.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...data.memes]);
  };

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      fetchMemes();
    }
  };

  return (
    <div className="flex flex-wrap">
      {memes?.map((meme, index) => (
        <MemeCard key={index} meme={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Home;
