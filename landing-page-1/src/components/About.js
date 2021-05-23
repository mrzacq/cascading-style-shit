function About(props) {
  return (
    <div id={props.id}>
      <div className="about-image">
        <img src={props.img} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          recusandae aliquam dignissimos assumenda nemo quidem, tenetur animi
          nisi, dolore tempore repudiandae? Sequi, consequatur aperiam
          architecto veniam tempore tempora omnis blanditiis.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
