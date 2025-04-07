import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import CloseButton from "../layout_components/CloseButton";
import vcdive_img1 from "../assets/VCDiveimg1.jpg";
import vcdive_img2 from "../assets/VCDiveimg2.jpg";
import vcdive_img3 from "../assets/VCDiveimg3.jpg";
import vcdive_cover from "../assets/VCDiveCover.jpg";

const VCDive = ({ closeComponent }) => {
    const vcdive_data = [
        { src: vcdive_img2, alt: "VCDive Main" },
        { src: vcdive_img1, alt: "VCDive Light" },
        { src: vcdive_cover, alt: "VCDive Dark" },
        { src: vcdive_img3, alt: "VCDive Dark (2)" },
    ];

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide + 1) % vcdive_data.length);
    };
    const prevSlide = () => {
        if (slide === 0) {
            setSlide(1);
        } else {
            setSlide(slide - 1);
        }
    };

    return (
        <div className="detail-container">
            <CloseButton closeComponent={closeComponent} />
            <div className="carousel-jisho">
                <BsArrowLeftCircleFill
                    className="arrow arrow-left"
                    onClick={prevSlide}
                />
                {vcdive_data.map((item, index) => {
                    return (
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={index}
                            className={
                                index === slide ? "slide" : "slide slide-hidden"
                            }
                        />
                    );
                })}
                <BsArrowRightCircleFill
                    className="arrow arrow-right"
                    onClick={nextSlide}
                />
                <span className="indicators">
                    {vcdive_data.map((_, id) => {
                        return (
                            <button
                                id={id.toString()}
                                onClick={() => setSlide(id)}
                                className={
                                    id === slide
                                        ? "indicator"
                                        : "indicator indicator-inactive"
                                }
                                key={id}
                            ></button>
                        );
                    })}
                </span>
            </div>
            <h3 className="subtitle">Screenshots of VCDive </h3>
            <div className="text-part">
                <h3 className="headline">
                    <a
                        href="https://github.com/haytham918/vcdive"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VCDive
                    </a>
                </h3>
                <h4 className="time-info">Jan. 2025 - Apr. 2025</h4>

                <h4 className="description">
                    In my last semester at UMich, I took EECS 470: Computer
                    Architecture and developed <i>VCDive</i>.
                </h4>

                <h4 className="description">
                    VCDive is an advanced visual debugger designed to enhance
                    the analysis of Value Change Dump (VCD) files, which are
                    crucial in digital circuit simulations for tracking signal
                    transitions over time. The frontend is built with{" "}
                    <span style={{ color: "violet" }}>Next.js</span> and the
                    backend is built with{" "}
                    <span style={{ color: "violet" }}>Flask</span>. One of its
                    standout features is CAEN Forwarding, allowing users to
                    debug VCD files directly on CAEN servers through DUO
                    authentication. This integration facilitates a seamless and
                    secure debugging process, eliminating the need for
                    cumbersome file transfers and ensuring that users can work
                    within their familiar server environments.
                </h4>

                <h4 className="description">
                    To address performance challenges associated with large VCD
                    files, VCDive employs a parser written in{" "}
                    <span style={{ color: "violet" }}>C++</span> and integrated
                    with <span style={{ color: "violet" }}>Python</span> using
                    Pybind. This combination leverages the efficiency of C++ for
                    rapid data processing and the flexibility of Python for user
                    interface and scripting capabilities. As a result, VCDive
                    offers faster parsing speeds and reduced memory consumption,
                    enabling users to handle extensive simulation data more
                    effectively.
                </h4>

                <h4 className="description">
                    Recognizing the need for compatibility with various
                    simulation outputs, VCDive includes a converter that
                    transforms VPD files into the VCD format. VPD files, often
                    used in specific simulation tools, can now be easily
                    converted, allowing users to utilize VCDive's robust
                    debugging features across different data formats. This
                    enhances the tool's versatility and applicability in diverse
                    simulation environments.
                </h4>

                <h4 className="description">
                    User experience is a priority in VCDive's design, evident in
                    its support for both light and dark modes. With a diverse
                    color palette representing different signal characteristics,
                    users can choose their preferred visual theme, reducing eye
                    strain and improving clarity during extended debugging
                    sessions. Additionally, VCDive offers seamless conversion
                    between decimal and hexadecimal representations,
                    accommodating various analysis requirements and user
                    preferences.
                </h4>

                <h4 className="description">
                    To further streamline the debugging process, VCDive
                    incorporates intuitive key bindings that facilitate quick
                    navigation through simulation cycles and efficient tool
                    operation. Complementing this is a dedicated terminal that
                    displays all signals not rendered in the main view, ensuring
                    comprehensive signal visibility. By integrating these
                    features, VCDive provides a robust and user-friendly
                    platform for professionals and researchers working with VCD
                    files, enhancing both efficiency and accuracy in digital
                    circuit analysis.
                </h4>
                <h4 className="description end-text">
                    <a
                        href="https://github.com/haytham918/vcdive"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check out the demo!
                    </a>
                </h4>
            </div>
        </div>
    );
};

export default VCDive;
