import React from "react";
import firstPage from "../assets/when-the-past-misleads.jpg";
import CloseButton from "../layout_components/CloseButton";

const WhenPastMisleads = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <CloseButton closeComponent={closeComponent} />
      <img
        src={firstPage}
        alt="When the Past Misleads first page"
        className="first-page-img"
      />
      <h3 className="subtitle">First Page of Paper</h3>
      <div className="text-part">
        <h3 className="headline">
          <a
            href="https://ojs.aaai.org/index.php/AIES/article/view/36757/38895"
            target="_blank"
            rel="noopener noreferrer"
          >
            When the Past Misleads: Rethinking Training Data Expansion Under
            Temporal Distribution Shifts
          </a>
        </h3>
        <h4 className="time-info">Feb. 2025 — June 2025</h4>

        <h4 className="description">
          I worked on this project with <a href="https://www.si.umich.edu/people/christopher-brooks" target="_blank" rel="noopener noreferrer">Christopher Brooks</a> at the University of Michigan, alongside Chengyuan Yao and Renzhe Yu from Columbia University and Rene Kizilcec from Cornell University. Together, we studied a question that shows up constantly in applied machine learning: whether using more historical training data actually helps when the world is changing over time. Using a 12-year community college retention dataset, we examine how predictive performance and fairness change as the training window expands under temporal distribution shifts.
        </h4>

        <h4 className="description">
          The core result is that more data is not automatically better. Longer
          historical windows help only up to a point, and once concept shift
          becomes large enough, adding older data can actively hurt model
          quality. Covariate drift by itself has much smaller effects, but it can
          amplify the damage caused by concept shift when both occur together.
        </h4>

        <h4 className="description">
          We also show that these shifts have important fairness implications.
          When concept shift differs across sociodemographic groups, fairness can
          degrade substantially, and the interaction becomes even less intuitive
          at the intersectional level. That makes temporal dataset design a
          modeling decision with real equity consequences rather than just a
          performance-tuning choice.
        </h4>

        <h4 className="description end-text">
          I contributed to the empirical analysis and framing around temporal
          distribution shift, helping connect the modeling results to practical
          guidance for educational prediction systems. The project reinforced how
          careful data window selection matters not only for accuracy, but also
          for robustness and fairness in real deployments.
        </h4>
      </div>
    </div>
  );
};

export default WhenPastMisleads;
