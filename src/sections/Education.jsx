import "../styles/education.css";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
} from "react-icons/fa";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">

        <p className="education-label">EDUCATION</p>

        <h2 className="education-title">
          Academic <span>Journey</span>
        </h2>

        <div className="education-timeline">

          {/* BTech */}
          <div className="education-card">

            <div className="edu-icon">
              <FaGraduationCap />
            </div>

            <div className="edu-left">

              <h3>Bachelor of Technology</h3>

              <h4>Computer Science and Engineering</h4>

              <p className="edu-college">
                Deogiri Institute of Engineering and Management Studies
              </p>

            </div>

            <div className="edu-right">

              <p className="edu-year">
                Expected July 2026
              </p>

              <p className="edu-score">
                CGPA: 8.04 / 10.0
              </p>

            </div>

          </div>

          {/* HSC */}
          <div className="education-card">

            <div className="edu-icon">
              <FaUniversity />
            </div>

            <div className="edu-left">

              <h3>Higher Secondary (HSC)</h3>

              <h4>Science Stream</h4>

              <p className="edu-college">
                Deogiri Junior College, Chhatrapati Sambhaji Nagar
              </p>

              <p className="edu-board">
                Maharashtra State Board
              </p>

            </div>

            <div className="edu-right">

              <p className="edu-year">
                March 2022
              </p>

              <p className="edu-score">
                89.98%
              </p>

            </div>

          </div>

          {/* SSC */}
          <div className="education-card">

            <div className="edu-icon">
              <FaSchool />
            </div>

            <div className="edu-left">

              <h3>Secondary School (SSC)</h3>

              <h4>General Education</h4>

              <p className="edu-college">
                Ujjawala Tai Pawar School
              </p>

              <p className="edu-board">
                Maharashtra State Board
              </p>

            </div>

            <div className="edu-right">

              <p className="edu-year">
                March 2020
              </p>

              <p className="edu-score">
                91.60%
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;