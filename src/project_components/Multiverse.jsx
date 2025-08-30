import React from "react";
import CloseButton from "../layout_components/CloseButton";
import multiverse from "../assets/multiverse.jpg";
const Multiverse = ({ closeComponent }) => {
    return (
        <div className="detail-container">
            <CloseButton closeComponent={closeComponent} />
            <img
                src={multiverse}
                alt="Multiverse-Cover"
                className="first-page-img"
            ></img>
            <h3 className="subtitle">First Page of Paper</h3>
            <div className="text-part">
                <h3 className="headline">
                    <a
                        href="https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.short-papers.193/2025.EDM.short-papers.193.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Understanding Predictive Models of Student Success with
                        a Multiverse Analysis{" "}
                    </a>
                </h3>
                <h4 className="time-info">
                    Aug. 2024 — Feb. 2025 (Accepted to Educational Data Mining
                    (EDM 2025))
                </h4>

                <h4 className="description">
                    This research project applies a multiverse analysis
                    framework to better understand predictive models of student
                    success—specifically, whether a first-year student will
                    re-enroll the following fall term. Working with{" "}
                    <a
                        href="https://www.si.umich.edu/people/christopher-brooks"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Christopher Brooks
                    </a>{" "}
                    at the University of Michigan, along with collaborators from
                    Cornell and Columbia, I helped design and implement a
                    pipeline that explores over 6,900 combinations of
                    administrative decisions, data processing techniques, and
                    machine learning configurations. This multiverse approach
                    allows us to observe how various choices affect model
                    performance and fairness, providing stakeholders with a
                    transparent, reproducible, and equitable view of the entire
                    modeling process.
                </h4>

                <h4 className="description">
                    The dataset consists of over 100,000 students across 15
                    years at a public university, and includes detailed
                    demographic and academic records. We examined three
                    categories of decisions: administrative choices like whether
                    to include race or COVID-19-era students, data processing
                    strategies like imputation or one-hot encoding, and model
                    tuning including classifier selection and hyperparameters.
                    Each unique configuration—or “universe”—was evaluated using
                    both AUC (predictive performance) and Equalized Odds
                    Difference (fairness) metrics. The result is a specification
                    curve that reveals how each parameter affects outcomes
                    across thousands of possible pipelines.
                </h4>

                <h4 className="description">
                    One key finding relates to the use of sampling techniques.
                    We found that under-sampling the majority class (re-enrolled
                    students) using NearMiss led to drastically worse
                    performance and higher unfairness, due to the inherent
                    imbalance of the dataset. Conversely, over-sampling with
                    SMOTE slightly improved performance but came with fairness
                    tradeoffs across race and sex. Another critical discovery
                    was that excluding race as a training feature did not harm
                    performance, but it did improve fairness outcomes,
                    suggesting that omitting sensitive features can be an
                    effective bias mitigation strategy in certain contexts.
                </h4>

                <h4 className="description end-text">
                    Ultimately, this project demonstrates that machine learning
                    models in education are highly sensitive to the design
                    decisions made by different stakeholders—administrators,
                    data scientists, and engineers alike. By adopting a
                    multiverse analysis, we empower researchers to identify not
                    just what works best, but how and why different choices
                    shape outcomes. This methodology helps ensure that
                    predictive models of student success are not only accurate,
                    but also transparent, fair, and tailored to the ethical
                    constraints of real-world deployment.
                </h4>
            </div>
        </div>
    );
};

export default Multiverse;
