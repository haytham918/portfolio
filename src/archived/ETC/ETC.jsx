import React, { useEffect } from "react";
import "./ETC.css";
import etcpic from "../etc_assets/etc.png";
import etcdinner from "../etc_assets/etc_dinner.jpg";
import homepage from "../../../assets/homePage.png";
import answerCard from "../../../assets/answerCard.png";
import pinte from "../etc_assets/pinte.jpg";
import blueberry from "../etc_assets/etc_blueberry.jpg";
import baozi from "../etc_assets/baozi.jpg";
export const ETC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="etc_title">Empowering Education Through Innovation:</h1>
      <h1 className="etc_title">
        My Journey with the Educational Technology Collective
      </h1>
      <div className="subtitle">September 2023</div>
      <div className="etc_content">
        The warm summer sun hung in the sky as I embarked on a transformative
        journey with the Educational Technology Collective (ETC), a community
        that would not only redefine my perception of education but also provide
        a platform for innovation and learning. Nestled amidst the verdant
        landscape, ETC served as a beacon of hope, where passionate educators
        and tech enthusiasts converged to create a brighter future for
        education. In this essay, I'll share the profound impact that ETC has
        had on my life and the remarkable strides we've made in the realm of
        educational technology, particularly in designing the mobile app
        "Ambient Learning."
        <div>
          <img src={etcpic} alt="etc-pic"></img>
          <h4 className="caption">Educational Technology Collective Logo</h4>
        </div>
      </div>

      <div className="etc_content">
        <div>
          <img src={etcdinner} alt="etc_dinner"></img>
          <h4 className="caption">
            Last Dinner before Ahbinava Left for Australia
          </h4>
        </div>
        <div>
          <h3>A Nexus of Visionaries</h3>
          The ETC lab led by Professor{" "}
          <a
            href="https://www.si.umich.edu/people/christopher-brooks"
            className="a_link"
          >
            Christopher Brooks
          </a>{" "}
          is a tapestry of diverse talents with different backgrounds from
          different regions. What unites us is a shared vision of harnessing
          technology to revolutionize education, making it more accessible,
          engaging, and effective. As I stepped into this community, I was
          greeted by a vibrant ecosystem that thrived on collaboration and
          innovation.
        </div>
      </div>

      <div className="etc_content">
        <div>
          <h3>Developing Ambient Learning</h3>
          <p>
            Within the heart of the ETC community, I found my niche as the
            mobile app developer for "Ambient Learning." This project was more
            than just a task; it was a creative journey that allowed me to
            channel my passion for design into something profoundly impactful.
            Together with a dedicated team of developers and educators, we
            embarked on a mission to redefine how people engage with educational
            content.
          </p>
          <br></br>
          <p>
            As the developer, I felt a deep sense of responsibility to ensure
            that the app was not only visually appealing but also intuitive and
            user-friendly. Our brainstorming sessions were electrifying, with
            ideas flowing freely as we sought to create an educational tool that
            could spark curiosity and enthusiasm in learners of all ages.
          </p>
          <br></br>
          <p>
            What made this experience truly special was witnessing the project
            evolve from rough sketches and wireframes into a fully functional
            mobile application. It was a testament to the collaborative spirit
            of ETC, where each member's expertise contributed to a harmonious
            symphony of innovation. The pride and satisfaction I felt upon
            seeing learners engage with our creation were immeasurable,
            reinforcing my belief in the power of technology to enhance
            education.
          </p>
        </div>
        <div>
          <img src={homepage} className="homepage_img" alt="home_page"></img>
          <img
            src={answerCard}
            className="homepage_img"
            alt="answer_card"
          ></img>
          <h4 className="caption">Ambient Learning Mobile App</h4>
        </div>
      </div>

      <div className="etc_content">
        <div>
          <img src={pinte} alt="pinte_ball"></img>
          <h4 className="caption">Photo at Pinte Pete's</h4>
        </div>

        <div>
          <h3>Building Bonds at Pinte Pete's</h3>
          <p>
            ETC was not merely a professional endeavor; it was a tight-knit
            community that valued the bonds we forged beyond the workplace. Our
            team-building excursion to Pinte Pete's in Ann Arbor exemplified
            this spirit of camaraderie. As we gathered around the table,
            indulging in delicious food and sharing stories, it became evident
            that ETC was more than just a group of colleagues; it was a family
            united by a shared passion for educational technology.
          </p>
          <br></br>
          <p>
            The laughter and genuine connections we formed at Pinte Pete's
            strengthened our resolve to work together cohesively, making our
            collaborative efforts even more fruitful. These social interactions
            transformed us from colleagues into lifelong friends, enriching not
            only our professional lives but also our personal ones.
          </p>
        </div>
      </div>

      <div className="etc_content">
        <div>
          <h3>Celebrating Milestones at the Blueberry Farm</h3>
          <p>
            One of the most heartwarming aspects of ETC was its commitment to
            celebrating the achievements of its members. Our visit to a
            picturesque blueberry farm to honor the dissertation of one of our
            PhD students, Dr.April Wang, stands as a testament to this
            commitment. Surrounded by the tranquility of nature, we competed
            picking blueberries, shared anecdotes, and celebrated the
            culmination of years of hard work and dedication.
          </p>
          <br></br>
          <p>
            This experience showcased ETC's unwavering support for its members
            and its belief in the importance of acknowledging milestones, both
            big and small. It was a reminder that within this community, our
            successes were not only recognized but also celebrated collectively,
            reinforcing our sense of belonging and the genuine care we had for
            one another's growth and achievements.
          </p>
        </div>

        <div>
          <img src={blueberry} alt="blueberry_farm"></img>
          <h4 className="caption">Blueberry Farm Celebration</h4>
        </div>
      </div>

      <div className="etc_content">
        <div>
          <img src={baozi} alt="making_baozi"></img>
          <h4 className="caption">Making Baozi For the First Time</h4>
        </div>

        <div>
          <h3>Culinary Adventures</h3>
          <p>
            ETC's spirit of exploration and learning extended to our culinary
            adventures, where we delved into the intricate world of dim sum. One
            memorable culinary excursion saw us crafting a variety of delectable
            dishes, from traditional Chinese steamed buns known as baozi to
            exotic treats like chicken feet.
          </p>
          <br></br>
          <p>
            For me, making baozi was a novel experience, and my colleagues
            proved to be excellent mentors. Their expertise in Chinese cuisine
            made the endeavor both enjoyable and educational. Under their
            guidance, we meticulously prepared the dough, crafted flavorful
            fillings, and steamed our handmade baozi to perfection. This
            culinary journey wasn't limited to baozi; we also explored other dim
            sum delights, including succulent shrimp dumplings and tender
            steamed pork ribs. Each dish offered its unique challenges and
            learning opportunities.
          </p>
          <br></br>
          <p>
            Sitting down to savor our homemade dim sum, which included the
            intriguing addition of chicken feet, was not just a feast for our
            taste buds but a testament to our collaborative efforts. This
            experience exemplified ETC's spirit of learning, teamwork, and the
            joy of discovery beyond the realm of technology. It showcased how,
            as a community, we could explore new horizons, embrace diverse
            experiences, and strengthen our bonds.
          </p>
        </div>
      </div>

      <div className="conclusion">
        <div>
          <h3>A Passionate Journey of Growth</h3>
          <p>
            My time with the Educational Technology Collective has been a
            passionate journey of growth, both personally and professionally.
            Through designing "Ambient Learning," building bonds at Pinte
            Pete's, celebrating milestones at the blueberry farm, and engaging
            in culinary adventures, I have not only gained valuable skills and
            experiences but also found a sense of purpose and fulfillment within
            this vibrant community.
          </p>
          <br></br>
          <p>
            ETC is more than just a summer lab; it's a beacon of innovation, a
            community of dreamers, and a force for positive change in education.
            As I continue to work alongside these inspiring individuals, I am
            excited about the boundless possibilities that lie ahead. My passion
            for education and technology has been reignited, knowing that within
            ETC, we have the power to shape the future of learning and empower
            learners worldwide.
          </p>
          <br></br>
          <p>
            In the grand tapestry of life, ETC has woven itself into my story,
            leaving an indelible mark of inspiration and hope. I eagerly
            anticipate the chapters yet to be written, knowing that my journey
            with this exceptional community is an ongoing narrative of passion,
            innovation, and the limitless potential of educational technology.
          </p>
        </div>
      </div>

      <a href="/#/honors" className="close-icon">
        <i className="uil uil-times close"></i>
      </a>
    </div>
  );
};
