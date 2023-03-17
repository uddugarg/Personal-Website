import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import home from "../assets/home.png";
import play from "../assets/play.png";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animations";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="home"
      >
        <div className="content">
          <div className="title">
            <h1>Procrastinate Coder</h1>
          </div>
          <div className="subTitle">
            <p>
              We make cool look easy. <br />
              We don’t just design websites, we design experiences.
              Our solution is your success.
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>
      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Agency</strong>
            <p>Procrastinate Coder</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>
              <a style={{ textDecoration: 'none', color: 'white' }} href="mailto:procrastinatecoder@gmail.com">procrastinatecoder@gmail.com</a>
            </p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+91 9897948462</p>
          </div>
          <div className="col">
            <strong>Social Link</strong>
            <p>
              <a target='_blank' style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', marginRight: '10px' }} href="https://github.com/uddugarg"><AiFillGithub /></a>
              <a target='_blank' style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', marginRight: '10px' }} href="https://www.instagram.com/procrastinate_coder/"><AiFillInstagram /></a>
              <a target='_blank' style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', marginRight: '10px' }} href="#"><AiFillLinkedin /></a>
              <a target='_blank' style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', marginRight: '10px' }} href="#"><AiFillFacebook /></a>
            </p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Corporate Identity</p>
            <p>Full Stack Deveplopment &amp; Devops</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Friday</p>
            <p>08:00 to 18:00</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;