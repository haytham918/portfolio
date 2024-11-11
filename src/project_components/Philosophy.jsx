import React, { useEffect } from "react";
import CloseButton from "../layout_components/CloseButton";
import { useNavigate } from "react-router-dom";

const Philosophy = () => {
  // Start from the beginning
  useEffect(() => {
    // Instantly scroll to top by setting scroll position on `document.documentElement` and `window`
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
          When I first chose computer science as my major, I viewed Computer
          Scientists primarily as programmers. I was drawn to the idea of
          solving problems through code, but it was not until I explored deeper
          during my undergraduate studies at the University of Michigan that I
          began to appreciate the vastness of computer science. From systems to
          algorithms, and ultimately machine learning and artificial
          intelligence, I realized that computer science is far more than
          coding. I became captivated by this powerful and innovative tool that
          has revolutionized entire industries. This growing fascination has
          motivated me to pursue machine learning application research at the
          graduate level, where I hope to contribute to building models that can
          be applied successfully and equitably across diverse fields.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Research Journey and Experiences</h2>
        <p style={{ textAlign: "justify" }}>
          Throughout my undergraduate studies, I have been involved in various
          projects and research initiatives that have laid the foundation for my
          graduate pursuits. A pivotal moment in my research development came
          when I joined Dr. SangHyun Lee’s lab, where I applied reinforcement
          learning to robotic systems in the field of Civil Engineering. My
          primary responsibility was to develop and optimize a reinforcement
          learning program that allowed a robotic arm to interact with humans
          and generate feedback based on its movements. I was thrilled that my
          contributions, including refactoring legacy code and automating the
          execution of 3DSSPP software, significantly improved the efficiency of
          a computer vision pipeline used to predict body gestures, leading to a
          patent application. This experience exposed me to the
          interdisciplinary potential of machine learning. I became especially
          interested in how adaptive models could be applied across fields like
          construction, robotics, and more.
        </p>

        <p style={{ textAlign: "justify" }}>
          My interdisciplinary interest in machine learning grew during my
          research with Dr. Kerby Shedden, where we focused on a low-rank
          expectile representation study of diurnal heart rate patterns. I
          focused on the theoretical derivation of expectile values and
          optimized the loss functions, which were used in a low-rank model to
          predict missing heart rate values. This research broadened my
          understanding of machine learning from a theoretical perspective and
          illustrated its effectiveness in areas like biology. I realized that
          machine learning can be a powerful tool not only for prediction but
          for solving complex, domain-specific problems.
        </p>

        <p style={{ textAlign: "justify" }}>
          Most recently, I conducted machine learning research in the
          educational domain under the supervision of Dr. Christopher Brooks. I
          explored the fairness of machine learning models and their impacts on
          education. I developed an interactive website that visualized model
          biases and demonstrated remediation strategies to improve fairness
          through a custom pipeline. Furthermore, I researched multiverse
          analysis, a technique where researchers evaluate multiple decision
          pathways to identify the best-performing and legally sound models.
          Currently, I am writing the multiverse analysis paper for the
          Educational Data Mining Conference (EDM) and exploring transfer
          learning mechanisms to help less-funded institutions, such as
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
        <h2 style={{ color: "#0056b3" }}>Technical Contributions and Goals</h2>
        <p style={{ textAlign: "justify" }}>
          These experiences have allowed me to apply machine learning
          techniques, such as reinforcement learning and low-rank matrices,
          across diverse fields like civil engineering, healthcare, and
          education. They have deepened my expertise with these tools and
          highlighted the transformative impacts machine learning models can
          have across different fields. I am eager to further advance my
          knowledge of these techniques and apply machine learning to develop
          models that successfully and equitably solve pressing problems in
          various domains.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Teaching and Mentorship</h2>
        <p style={{ textAlign: "justify" }}>
          In addition to my research, I have also developed a strong passion for
          teaching. As an undergraduate teaching assistant for an operating
          systems class, I have embraced inquiry-based learning, encouraging
          students to think critically and find solutions independently. This
          experience has significantly enhanced my ability to communicate
          complex concepts clearly, deepened my understanding of computer
          science, and sharpened my critical thinking by approaching problems
          from diverse perspectives. It has reinforced my dedication to academia
          and motivated me to become an even more effective educator and mentor.
          I look forward to cultivating the next generation of computer
          scientists, helping them develop both the technical skills and
          critical thinking abilities essential for success in this rapidly
          evolving field.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#0056b3" }}>Conclusion</h2>
        <p style={{ textAlign: "justify" }}>
          I am deeply motivated to further my understanding of machine learning,
          particularly in interdisciplinary applications, through graduate
          studies. I commit to conducting machine learning research that not
          only pushes the boundaries of computer science but also impacts other
          diverse domains. It is my pursuit to become a professor to carry out
          impactful research and inspire future computer scientists.
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
