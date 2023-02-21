import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import 'tw-elements';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.header}>
      <Head>
        <title>Home | Desi Script</title>
        <meta name="description" content="Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.navitems}>
          <ul>
            <li>
              <a style={{ fontSize: "1.8rem" }} href="#home">
                Desi Script
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        
        <section id="home" className={styles.home}>
          <p>Let&apos;s build your next project</p>
          <p>Full Stack Developer</p>
          <p>
            Hi! My name is Shadman Ali and I can help you create your future
            product, feature or website. Let&apos;s talk!
          </p>
        </section>
      </main>
    </div>
  );
}
