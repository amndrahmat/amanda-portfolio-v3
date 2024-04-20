import React from "react";
import { useLayoutEffect } from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem.js";

export default function Certificaton() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1
        className="certification"
        style={{ backgroundImage: `url(/images/bgcover4.jpg` }}
      >
        Certification
      </h1>
      <div className="cards" id="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/Menjadi Front-End Web Developer Expert.png"
                text="This class is aimed at a Front-End Web Developer who wants to develop a website that is optimal, easy to use, and sophisticated when accessed by all devices, especially smartphones. At the end of the class, students can create front-end web applications that are responsive, have good accessibility, are easy to maintain, are native, can be tested, and have good performance."
                label="Menjadi Front-End Web Developer Expert"
                path="https://dicoding.com/certificates/2VX32NJ53PYQ"
                source="by Dicoding Academy"
                textPath="More Information "
              />
              <CardItem
                src="images/PWA-cert.png"
                text="This class thoroughly discusses the components needed to implement Progressive Web Apps such as App Shell, Service Worker, Web Push, and Web Apps Manifest. Compiled and carried out by Codepolitan as our partner in developing the academy, the material presented is comprehensive and comprehensive."
                label="Membangun Progressive Web Apps"
                path="https://www.dicoding.com/certificates/72ZD284OLZYW"
                source="by Dicoding Academy"
                textPath="More Information "
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/Architecting on AWS.png"
                text="This class is intended for individuals who want to move to a higher level in cloud computing, such as becoming an AWS Solutions Architect by referring to AWS's international competency standards. By the end of the class, students will be able to build cloud architectures on AWS by applying AWS best practices."
                label="Architecting on AWS (Membangun Arsitektur Cloud di AWS)"
                path="https://dicoding.com/certificates/RVZK4Q0YMPD5"
                source="by Dicoding Academy"
                textPath="More Information "
              />
              <CardItem
                src="images/Belajar Fundamental Front-End Web Development.png"
                text="The class is aimed at a front-end web developer who wants to develop a website with simple, reusable and optimal techniques. At the end of the class, students can create front-end web applications with ES6 standard JavaScript code, implement Web Components, module bundlers, and display dynamic data from Web APIs using asynchronous request techniques."
                label="Belajar Fundamental Front-End Web Development"
                path="https://dicoding.com/certificates/KERZR3D3WXYV"
                source="by Dicoding Academy"
                textPath="More Information "
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/Cloud Practitioner Essentials.png"
                text="The class is aimed at beginners who want to start their careers in the field of cloud computing by referring to AWS's international competency standards. At the end of the class, students can understand the AWS Cloud with all its types of services, global infrastructure, and prices."
                label="Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)"
                path="https://dicoding.com/certificates/4EXGKM90EZRL"
                source="by Dicoding Academy"
                textPath="More Information "
              />
              <CardItem
                src="images/mongoDB-cert.png"
                text="Understand the basics of learning MongoDB"
                label="Belajar MongoDB untuk Pemula"
                path="https://www.codepolitan.com/c/MVKBUOS/"
                source="by Codepolitan"
                textPath="More Information "
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/agilescrum-cert.jpeg"
                text="This class explains in detail how to work collaboratively in project management by prioritizing the 4 Values and 12 Principles of Agile, and an explanation of the stages with Scrum Events, to produce a capable project."
                label="Penggunaan Agile dan Scrum untuk Development Project"
                path="https://skillacademy.com/sertifikat/PJLU3FOS1ZPF9D"
                source="by Skill Academy by Ruangguru"
                textPath="More Information "
              />
              <CardItem
                src="images/Belajar Dasar Visualisasi Data.png"
                text="The class is aimed at beginners who want to start their careers in the field of data processing by referring to industry competency standards. At the end of the class, students can create an effective data visualization using Google Sheets according to industry best practice techniques, thereby increasing their value in a career as a Software Developer."
                label="Belajar Dasar Visualisasi Data"
                path="https://dicoding.com/certificates/4EXGKDD7DZRL"
                source="by Dicoding Academy"
                textPath="More Information "
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/Belajar Membuat Aplikasi Back-End untuk Pemula.png"
                text="This class is intended for individuals who want to step up to become a Back-End Developer with AWS's international competency standards. At the end of the class, students can independently create simple RESTful APIs to support the functionality of an application."
                label="Belajar Membuat Aplikasi Back-End untuk Pemula"
                path="https://dicoding.com/certificates/81P2VEO4QPOY"
                source="by Dicoding Academy"
                textPath="More Information "
              />
              <CardItem
                src="images/Belajar Dasar Pemrograman JavaScript.png"
                text="This class is intended for individuals who want to step up to become a Web Developer/Back-end developer using Node.js technology using industry competency standards validated by AWS. By the end of the class, students can master the basics of JavaScript for web application development using Node.Js."
                label="Belajar Dasar Pemrograman JavaScript"
                path="https://dicoding.com/certificates/1RXY156EMPVM"
                source="by Dicoding Academy"
                textPath="More Information "
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
