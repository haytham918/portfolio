import React, { useEffect } from "react";
import CloseButton from "../layout_components/CloseButton";
import { useNavigate } from "react-router-dom";

const Philosophy = () => {
  // Start from the beginning
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari compatibility
  }, []);

  // Close Button back
  const navigate = useNavigate();
  const closeComponent = () => {
    navigate("/enghonors");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "#333",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <CloseButton closeComponent={closeComponent} />
      <h1 style={{ color: "#0056b3", textAlign: "center" }}>
        Philosophy Statement
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Introduction</h2>
        <p style={{ textAlign: "justify" }}>
          I still remember the enormous excitement of seeing the wheeled robot
          follow the directions coded by my VEX robotics team, gracefully pick
          up objects, and place them perfectly on balance. At that time, I
          thought computer science was all about writing code to solve problems
          and decided to choose it as my college major. However, as I explored
          deeper during my undergraduate studies at the University of Michigan,
          I discovered programming was just the gateway to a far more vast
          field. From systems to algorithms, and ultimately machine learning and
          artificial intelligence, I realized that computer science is a
          powerful and innovative tool capable of revolutionizing industries and
          addressing global challenges. Witnessing its potential to drive
          innovation and tackle complex problems has motivated me to pursue
          machine learning application research at the graduate level, where I
          devote myself to developing innovative, ethical, and interdisciplinary
          models that can make meaningful contributions to the real world.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Research Journey and Experiences</h2>
        <p style={{ textAlign: "justify" }}>
          Throughout my undergraduate studies, I have actively sought
          opportunities to expand my skills and explore interdisciplinary
          applications of machine learning. My research experiences have
          cultivated my abilities to persevere through complex technical
          challenges, adapt to new disciplines, and lead impactful projects. As
          a member of Dr. SangHyun Lee’s lab, I worked on applying reinforcement
          learning to robotic systems in civil engineering. This project
          provided me with an opportunity to adapt machine learning techniques
          to meet the specific demands of a new domain. My primary role was to
          optimize a reinforcement learning program that enabled a robotic arm
          to interact with humans and generate feedback based on its movements.
          Additionally, I automated the execution of 3DSSPP software by
          refactoring legacy code, automating batch processes, and improving
          gesture prediction pipelines using computer vision techniques.
          Integrating ML techniques into civil engineering workflows required an
          understanding of both disciplines. I was responsible for learning the
          calculations of body movements and making corresponding commands in
          the code base, and I needed to document program functionalities and
          explain them in a pithy way to people without much knowledge of
          coding. This is a complex challenge for me to coordinate between two
          disciplines. I felt frustrated in the beginning, but I managed to
          self-learn concepts, ask for help from Ph.D. students, and communicate
          ideas using both texts and visuals. Ultimately, I was able to
          streamline processes and support a patent application. This experience
          enlightened my passion for interdisciplinary research and demonstrated
          the adaptability of machine learning.
        </p>
        <br></br>
        <p style={{ textAlign: "justify" }}>
          Since January 2024, I have been working with Dr. Kerby Shedden’s team
          to explore the application of machine learning in the healthcare
          industry. We focused on studying diurnal heart rate patterns using
          low-rank expectile representation, where I adapted machine learning
          techniques to analyze large-scale complex medical datasets. While
          theoretical work on loss function optimization was new to me, I took
          the initiative to refine derivations, optimize algorithms, and apply
          them to real-world datasets, all to improve heart rate data
          predictions for a better understanding of cardiovascular health.
          Through this research, I not only honed my technical expertise while
          deepening my understanding of the wider social implications of machine
          learning, but also gained firsthand experience in applying machine
          learning to sensitive and critical domains, where technical precision
          and responsibility are essential.
        </p>
        <br></br>
        <p style={{ textAlign: "justify" }}>
          Most recently, under Dr. Christopher Brooks, I researched the fairness
          of machine learning models and their impacts on education. In this
          project, I developed an interactive website that visualized model
          biases and demonstrated remediation strategies to improve fairness
          through a custom pipeline. Furthermore, I studied multiverse analysis,
          a technique to evaluate multiple decision pathways and identify the
          best-performing and legally sound models. Currently, I am writing a
          paper for the Educational Data Mining Conference (EDM) and exploring
          transfer learning mechanisms to help less-funded institutions, such as
          community colleges, deploy strong, fair predictive models. These
          experiences deepened my understanding of fairness in machine learning,
          which I regard as both a technical and ethical challenge. As machine
          learning continues to influence the decision-making process across
          industries, ensuring fairness and inclusivity is critical in
          developing systems that benefit all individuals, particularly those in
          underrepresented communities.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Teaching and Mentorship</h2>
        <p style={{ textAlign: "justify" }}>
          Beyond research, my role as an undergraduate teaching assistant for
          the Operating System course has honed my ability to communicate
          complex concepts effectively. I encourage inquiry-based learning,
          fostering critical thinking and independent learning among students.
          This experience has not only deepened my understanding of computer
          science but has also reinforced my dedication to academia. I look
          forward to cultivating the next generation of computer scientists,
          helping them develop not only the technical skills but also critical
          thinking and ethical decision-making abilities essential for success
          in this rapidly evolving field.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Conclusion</h2>
        <p style={{ textAlign: "justify" }}>
          I am eager to further advance my knowledge of these techniques and
          apply machine learning to develop models that successfully and
          equitably solve pressing problems in various domains. My ultimate goal
          is to become a professor, conducting research at the forefront of
          machine learning while mentoring the next generation of computer
          scientists. I am particularly passionate about developing equitable
          and inclusive AI systems that address critical challenges across
          domains. By pursuing a graduate degree, I
          will contribute to the tradition of excellence in innovation,
          leadership, and collaboration while growing into a researcher and
          educator who embodies resilience, ethics, and leadership.
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
