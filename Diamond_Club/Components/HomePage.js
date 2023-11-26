import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function goToApp() {
    navigate("/app");
  }

  return (
    <div className="full-height home">
      <h1 className="home-heading">Home Page</h1>
      <button className="btn home-btn" onClick={goToApp}>
        Go to App
      </button>
    </div>
  );
}

export default HomePage;
