import React from "react";
import mercury_cover from "../assets/mercury.jpg";
const Mercury = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <img
        src={mercury_cover}
        alt="Mercury-Cover"
        className="first-page-img"
      ></img>
      <h3 className="subtitle">First Page of Paper</h3>
      <div className="text-part">
        <h3 className="headline">Mercury - QoS Memory System</h3>
        <h4 className="time-info">May 2023 — June 2024</h4>

        <h4 className="description">
          In May 2023, I began working under the supervision of{" "}
          <a
            href="https://mosharaf.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Dr. Mosharf Chowdhury
          </a>{" "}
          at the University of Michigan on developing{" "}
          <span style={{ color: "violet" }}>Mercury</span>, a QoS-aware tiered
          memory system designed to address the growing memory demands of
          memory-intensive applications. While existing tiered memory systems
          offer increased capacity to accommodate more applications, they lack
          robust support for{" "}
          <span style={{ color: "violet" }}>Quality-of-Service (QoS)</span>,
          leading to significant performance drops when multiple applications
          share the system. In fact, applications often suffer up to a 70%
          reduction in performance due to local memory contention and bandwidth
          interference—two issues that are unique to tiered memory systems.
        </h4>

        <h4 className="description">
          To solve this, Mercury introduces a novel solution by enforcing
          application-level resource management through{" "}
          <span style={{ color: "violet" }}> per-tier page reclamation</span>{" "}
          and leveraging an innovative{" "}
          <span style={{ color: "violet" }}>
            admission control and real-time adaptation algorithm
          </span>
          . These features maximize memory utilization and minimize
          interference, ensuring predictable performance for coexisting
          applications with different{" "}
          <span style={{ color: "violet" }}>
            Service-Level Objectives (SLOs)
          </span>
          .
        </h4>

        <h4 className="description">
          As a Research Assistant, I played a crucial role in the design and
          testing of this system. I led performance experiments using Docker and
          Intel Platform QoS tools, focusing on latency-sensitive applications
          like Redis and bandwidth-heavy applications like Llama. By simulating
          real-world workloads, I assessed system performance under varying
          conditions of memory contention and interference, contributing to the
          fine-tuning of the Mercury system’s adaptive algorithms. My work
          directly supported the improvement of memory access efficiency,
          leading to performance gains of up to{" "}
          <span style={{ color: "violet" }}>53.4%</span> for applications
          sharing the tiered memory system.
        </h4>

        <h4 className="description end-text">
          Throughout this project, I also contributed to the development of the
          research paper, offering critical feedback during the writing and
          review process. This project not only honed my skills in systems
          research but also provided hands-on experience with cutting-edge tools
          for distributed systems optimization.
        </h4>
      </div>
    </div>
  );
};

export default Mercury;
