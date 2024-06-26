import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

import { FaArrowUp } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Welcome from "@/components/Weclome";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import ContactBar from "../ContactBar";

const inter = Inter({ subsets: ["latin"] });

export default function DesiScript() {
  const socialLinks = {
    facebook:"https://www.facebook.com/desiscript",
    linkedin: "https://www.linkedin.com/company/desi-script/",
    github: "https://github.com/Desi-Script",
    email: "mailto:shadman.ali@live.co.uk",
  }

  return (
    <>
      <div className={styles.header}>
        <Head>
          <title>Home | Desi Script</title>
          <meta name="description" content="Full Stack Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#D3D3D3" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactBar />
        <Navbar brandUrl="/" content="Desi Script" />

        <Welcome
          animatedTexts={[
            "Full Stack Development",
            "Back End Development",
            "Front End Development",
          ]}
          description="Hi! We can assist you in developing your
              upcoming product, feature, or website. Let's talk!"
          buttonTitle="See Our Work"
          socialLinks={socialLinks}
        />
      </div>
      <Services
        description="Our objective is to deliver high-quality web-based software and ensure exceptional user experiences through:"
        frontEndDescription="Crafting user interfaces for web applications utilizing standard HTML/CSS/JS methodologies and technologies. Generating visual components that users engage with and interact within applications."
        backEndDescription="Our responsibilities include developing and managing testing
            schedules in client-server environments, ensuring that the
            content is displayed correctly across various browsers and
            devices while maintaining the security and functionality of the
            site. Additionally, We model data and design databases to ensure
            optimal performance."
        webDesignDescription="Developing user interfaces for mobile applications, employing standard HTML/CSS/JS practices and technologies. Crafting visual components that users view and engage with within the applications."
        hostingDescription="We are responsible for website hosting and ensuring its online presence."
      />
      <Skills
        frontEndDescription="Our proficiencies include HTML5/CSS3, JavaScript, TypeScript, ES6 syntax, DOM
          manipulation, as well as working with frameworks such as
          Express, Next.js, and React. We are also experienced in Webpack,
          Redux for state management, Thunks, and utilizing CSS frameworks
          such as Bootstrap and TailwindCSS."
        backEndDescription="We have experience working with Express, Next.js, and Laravel
          frameworks, creating RESTful database APIs, and documenting
          them. Additionally, We are knowledgeable in PostgreSQL and MySQL
          databases, database performance and optimization, as well as
          replication and migration."
        designerDescription="Our skillset includes Object-Oriented Programming, SOLID
          principles, Design Patterns, Test-Driven Development, and
          proficiency in Git, Github, Heroku, Netlify, Vercel, and
          GitHub-flow/git-flow."
        agileDescription="Extensive experience with remote and asynchronous collaboration,
          including standup meetings, pair programming, unit testing (TDD,
          BDD), and code reviews."
      />
      <Projects hidden = {{}}/>
      <About
        title="About Us"
        aboutDescription="As a skilled professionals, We are passionate about creating
            visually stunning websites that offer superior functionality. We are driven by the desire to leverage our skills to develop
            websites that provide an exceptional user experience and promote
            engagement. We would be
            delighted to contribute our expertise and help bring your vision to life."
      />

      <Contact
        description="We are always open to exploring new projects and opportunities. Therefore,
            if you would like to have a conversation, please don't hesitate to reach
            out to us."
      />
      <Footer title="Desi Script" socialLinks={socialLinks} />

      <GoToTop />
    </>
  );
}
