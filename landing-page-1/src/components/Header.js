import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span> With Confidence And Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          delectus ipsam nisi veritatis voluptatibus eligendi modi ut
          reprehenderit dolor recusandae consectetur iusto, praesentium pariatur
          quibusdam debitis aut assumenda id dolores.
        </p>
        <a href="#download" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
