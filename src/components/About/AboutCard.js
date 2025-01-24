import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James Golden </span>
            from <span className="purple"> Ontario, Canada.</span>
            <br />
            I am currently employed as an AI software Engineer. 
            <br />
            I have completed several products, Web sites, Web Application, Mobile App for Android/iOS and AI products  
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing BasketBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Walk with friend
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " 𝐓𝐡𝐞 𝐩𝐞𝐨𝐩𝐥𝐞 𝐰𝐡𝐨 𝐚𝐫𝐞 𝐜𝐫𝐚𝐳𝐲 𝐞𝐧𝐨𝐮𝐠𝐡 𝐭𝐨 𝐭𝐡𝐢𝐧𝐤 𝐭𝐡𝐞𝐲 𝐜𝐚𝐧 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞 𝐰𝐨𝐫𝐥𝐝 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐨𝐧𝐞𝐬 𝐰𝐡𝐨 𝐝𝐨✍ 𝐈 💘 𝐭𝐡𝐢𝐬 𝐖𝐎𝐑𝐃!"{" "}
          </p>
          {/* <footer className="blockquote-footer">James Golden</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
