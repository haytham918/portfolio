import React from "react";
import expectile from "../assets/expectile.jpg";
import "./Expectile.css";
import CloseButton from "../layout_components/CloseButton";
const Expectile = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <CloseButton closeComponent={closeComponent} />
      <img
        src={expectile}
        alt="Expectile-Cover"
        className="first-page-img"
      ></img>
      <h3 className="subtitle">First Page of Paper</h3>
      <div className="text-part">
        <h3 className="headline">
          Low-Rank Expectile Analysis of Diurnal Heart Rates
        </h3>
        <h4 className="time-info">
          Jan. 2024 — May 2024 (Currnetly Furthering & Solidifying Work)
        </h4>

        <h4 className="description">
          In Winter 2024, I worked under the supervision of{" "}
          <a
            href="https://lsa.umich.edu/stats/people/faculty/kshedden.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Kerby Shedden
          </a>{" "}
          in the University of Michigan’s Statistics Department on a project
          that applied machine learning techniques to health data analysis. Our
          primary goal was to use a low-rank model with an expectile loss
          function to analyze and predict diurnal heart rate patterns. This
          approach allowed us to address complex challenges such as missing data
          and variability in the heart rate records, which totaled over 20,000
          entries.
        </h4>

        <h4 className="description">
          My responsibilities included preprocessing the dataset and developing
          a custom model-fitting algorithm tailored to the specific nature of
          heart rate data. By leveraging NumPy and PyTorch, I was able to
          implement a low-rank expectile model that effectively managed missing
          values, leading to a 45% improvement in the adaptability and accuracy
          of the loss function. This refinement was critical in ensuring that
          the model could produce reliable predictions even in the presence of
          incomplete data.
        </h4>

        <h4 className="description">
          In addition to the technical work, I contributed to the theoretical
          aspects of the project, particularly in the mathematical derivation of
          the loss function. This work was integral to enhancing the model's
          effectiveness in capturing extreme trends in heart rate fluctuations,
          which we identified through our analysis. These trends played a key
          role in the report I coauthored, which provided insights into targeted
          interventions and personalized healthcare strategies, with a focus on
          underrepresented populations who are often overlooked in such studies.
        </h4>

        <h4 className="description end-text">
          This project not only strengthened my skills in machine learning and
          statistical modeling but also deepened my understanding of how
          predictive models can be applied to real-world health challenges. The
          outcomes of our research hold potential for improving the monitoring
          and treatment of cardiovascular conditions, particularly in
          communities where healthcare data is often incomplete or inconsistent.
        </h4>
      </div>
    </div>
  );
};

export default Expectile;
