import React from "react";
import img from "../../assets/images/twitter.png";

const TweetButton = ({ text, url }) => {
  const handleClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "width=550,height=420");
  };

  return (
    <button onClick={handleClick}>
      <img src={img} width={35} alt="img" />
    </button>
  );
};
export default TweetButton;
