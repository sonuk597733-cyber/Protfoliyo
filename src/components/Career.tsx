import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Started my journey in Computer Science with a focus on
              programming, web development, and problem solving.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Built practical projects and developed skills in HTML, CSS,
              JavaScript, Node.js, Express.js, MongoDB, and REST APIs.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Development</h4>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Currently learning React and strengthening my full-stack
              development skills by building practical projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;