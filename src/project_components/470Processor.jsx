import React from "react";
import diagram from "../assets/470_diagram.jpg";
import "./470Processor.css";

import CloseButton from "../layout_components/CloseButton";
export const Processor = ({ closeComponent }) => {
    return (
        <div className="detail-container">
            <CloseButton closeComponent={closeComponent} />
            <div className="processor-img">
                <img src={diagram} alt="diagram"></img>
            </div>
            <h3 className="subtitle">
                Snapshot of CPU Diagram (Milestone 2 version)
            </h3>
            <div className="text-part">
                <h3 className="headline">
                    <a
                        href="/470_final_paper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        N-way Superscaler RISC-V Computer Architecture (EECS
                        470)
                    </a>
                </h3>
                <h4 className="time-info">Jan. 2025 — Apr. 2025</h4>
                <h4 className="description">
                    During the last semester at the University of Michigan, I
                    took one of my favorite classes—EECS 470 (Computer
                    Architecture). Over the course of this class, I partnered
                    with 5 other teammates to build an entire functioning
                    out-of-order RISC-V processor based on the MP10K
                    architecture using{" "}
                    <span style={{ color: "violet" }}>SystemVerilog</span>. We
                    were the{" "}
                    <span style={{ color: "violet" }}>
                        highest scoring group
                    </span>{" "}
                    in the WN 2025 semester, and I was able to develop a GUI
                    debugger throughout the process. Access the{" "}
                    <a
                        href="/470_final_paper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        paper
                    </a>
                    .
                </h4>
                <h4 className="description">
                    Our CPU is a highly configurable, out-of-order RISC-V
                    processor built around an N-way superscalar pipeline that
                    balances performance and modularity. Drawing inspiration
                    from the MIPS-R10K, Tate can fetch, decode, issue, and
                    retire up to N instructions per cycle, with each stage&#39;s
                    width independently tunable to match dispatch, fetch, and
                    Common Data Bus sizes . To shorten critical paths and reduce
                    pipeline stalls, we implemented{" "}
                    <span style={{ color: "violet" }}>
                        Early Tag Broadcast (ETB)
                    </span>
                    —broadcasting completed instruction tags one cycle early—and{" "}
                    <span style={{ color: "violet" }}>
                        Early Branch Resolution (EBR)
                    </span>
                    —checkpointing architectural state at branch dispatch and
                    restoring it immediately on mispredict. These features
                    together drove our weighted CPI down to{" "}
                    <span style={{ color: "violet" }}>1.64</span> and our clock
                    period to <span style={{ color: "violet" }}>7.2 ns</span>
                    across a 15-benchmark suite.
                </h4>
                <h4 className="description">
                    Through systematic design-space exploration, we found a
                    superscalar width of two struck the optimal balance: wider
                    pipelines increased clock period without meaningful CPI
                    gains due to memory and parallelism limits, while narrower
                    widths underutilized available ILP . Core structures like
                    the Reservation Station and Reorder Buffer were parametrized
                    in tandem—performance plateaued at an RS of 16 entries and
                    an ROB of 32 entries—so we fixed those for our final design.
                    Each functional unit is pipelined for timing, and the
                    return-address stack plus an 8-bit GShare predictor together
                    deliver both branch-prediction accuracy and low mispredict
                    penalty.
                </h4>
                <h4 className="description">
                    Our memory subsystem is equally sophisticated. The
                    instruction cache comprises two banks plus two prefetch
                    stream buffers, aggressively issuing prefetches yet
                    conservatively promoting data to avoid bad evictions . On
                    the data side, a non-blocking, multi-banked, set-associative
                    cache with a 13-entry MSHR table supports out-of-order
                    memory operations, store-forwarding, and a modular eviction
                    framework (LRU, Clock, SRRIP, BRRIP) . The store queue and
                    load buffer are fully parametric, allowing us to tune size
                    versus clock-period trade-offs without sacrificing
                    correctness.
                </h4>
                <h4 className="description end-text">
                    Throughout development, we emphasized modularity and
                    debuggability. We built{" "}
                    <span style={{ color: "violet" }}>VCDive</span> (see the
                    other project for details), an open-source, web-based visual
                    debugger that parses enhanced VPD/VCD files with a C++
                    backend (via PyBind11) and serves a Next.js/Flask frontend
                    for cycle-accurate inspection . Features like
                    CAEN-Forwarding automate secure retrieval of huge trace
                    files, and conversion from VPD to VCD preserves structural
                    integrity for rapid, interactive debugging. Rigorous unit
                    and integration testing, along with distributed
                    synthesis-sweep automation, ensured our CPU is not only
                    high-throughput but also deeply introspectable and
                    extensible.
                </h4>
            </div>
        </div>
    );
};
