import { useNavigate } from "react-router-dom";
import { Button } from "antd";

/* Homepage component */
function HomePage(){
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1> Welcome to Breaking Out Of The Social Media Echo Chamber </h1>

      <p>
        The way we consume news today is often shaped by algorithms that reinforce our existing beliefs -
        creating echo chambers that are hard to break out of.
      </p>

      <p>
        Our app helps you to step outside of that bubble by showing how different sources report on the same topic,
        categorised into 
        <span className="positive"> <strong> Positive</strong></span>, 
        <span className="neutral"> <strong> Neutral</strong></span> and 
        <span className="negative"> <strong> Negative</strong></span> sentiment.
      </p>

      <p>
        Whether you are researching a trending story or just curious about how narratives shift,
        we will help you get a clearer picture of the full conversation!
      </p>

      <Button type="primary" size="large" onClick={() => navigate("/search")}>
        Start Searching
      </Button>
    </div>
  );
}

export default HomePage;

