import capstonepic from "../assets/capstone.jpeg";
import converterpic from "../assets/converter.jpg";
import ambientCover from "../assets/ambient-cover.png";
import thdssppcover from "../assets/3DSSPP-Cover.jpg";
import expectileCover from "../assets/expectile.jpg";
import mercuryCover from "../assets/mercury.jpg";
import fairnessCover from "../assets/fairnessWebCover.jpg";
import whenPastMisleadsCover from "../assets/when-the-past-misleads.jpg";
import multiverse from "../assets/multiverse.jpg";
import vcdiveCover from "../assets/VCDiveCover.jpg";
import processorCover from "../assets/470_diagram.jpg";

let work_id = 0;
export const projectsData = [
    {
        id: work_id++,
        image: processorCover,
        title: "N-way Superscaler RISC-V Computer Architecture (EECS 470)",
        category: "Project",
    },
    {
        id: work_id++,
        image: vcdiveCover,
        title: "VCDive",
        category: "Project",
    },
    {
        id: work_id++,
        image: whenPastMisleadsCover,
        title: "When the Past Misleads: Rethinking Training Data Expansion Under Temporal Distribution Shifts",
        category: "Research",
    },
    {
        id: work_id++,
        image: multiverse,
        title: "Understanding Predictive Models of Student Success with a Multiverse Analysis",
        category: "Research",
    },
    {
        id: work_id++,
        image: fairnessCover,
        title: "Fairness in Educational Models",
        category: "Project",
    },
    {
        id: work_id++,
        image: thdssppcover,
        title: "Automated 3DSSPP Software",
        category: "Project",
    },
    {
        id: work_id++,
        image: expectileCover,
        title: "Low-Rank Expectile Representations of a Data Matrix, with Application to Diurnal Heart Rates",
        category: "Research",
    },
    {
        id: work_id++,
        image: ambientCover,
        title: "Ambient Learning Mobile App",
        category: "Project",
    },
    {
        id: work_id++,
        image: mercuryCover,
        title: "Themis - QoS Memory System",
        category: "Research",
    },
    {
        id: work_id++,
        image: capstonepic,
        title: "Linear Programming Capstone",
        category: "Research",
    },
    {
        id: work_id++,
        image: converterpic,
        title: "Universal Converter Web App",
        category: "Project",
    },
];
