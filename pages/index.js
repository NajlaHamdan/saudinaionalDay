import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
export default function Home() {
  // const userName = useRef("");
  const [userName, setUsername] = useState("");
  const [design, setDesign] = useState("");
  const getName = (e) => {
    console.log(e.target.design.value);
    setUsername(e.target.name.value);
    setDesign(e.target.design.value);
    // console.log(userName.current.value);
    e.preventDefault();
  };
  const downloadTwitter = async () => {
    const domElement = document.getElementById("twitter");
    const body = await html2canvas(domElement).then(function (canvas) {
      //  domElement.appendChild(canvas);
      const img = canvas.toDataURL("image/jpeg");
      // canvas.append(domElement);
      // doc.addImage(img, "jpg", 5, 5, 200, 250);
      // doc.save("a4.jpg");
      var a = document.createElement("a");
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");

      a.download = "twitter.jpg";
      a.click();
    });
  };
  const downloadPdf = async () => {
    const doc = new jsPDF();
    const domElement = document.getElementById("content");
    const body = await html2canvas(domElement).then(function (canvas) {
      //  domElement.appendChild(canvas);
      const img = canvas.toDataURL("image/jpeg");
      // canvas.append(domElement);
      // doc.addImage(img, "jpg", 5, 5, 200, 250);
      // doc.save("a4.jpg");
      var a = document.createElement("a");
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");

      a.download = "linkedin.jpg";
      a.click();
    });
  };
  const downloadWhatsApp = async () => {
    const doc = new jsPDF();
   
    const domElement = document.getElementById("whatsApp");
    const body = await html2canvas(domElement)
      .then(function (canvas) {
        //  domElement.appendChild(canvas);
        const img = canvas.toDataURL("image/jpeg");
        // canvas.append(domElement);
        // doc.addImage(img, "jpg", 5, 5, 200, 250);
        // doc.save("a4.jpg");
        var a = document.createElement("a");
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");

        a.download = "whatsApp.jpg";
        a.click();
      })
  };
  return (
    <div>
      <Head>
        <title>Saudi National Day</title>
        <meta name="national day" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.4"
          id="viewport"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <Image src="/logo.png" alt="logo" width={100} height={50} />
          </div>
          <div>
            <form onSubmit={getName} className={styles.form}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="أدخل أسمك وانقر على الصورة للحصول على نسختك الخاصة من التصميم"
              />

              <select name="design" className={styles.select}>
                <option value="">التصميم</option>
                <option value={0}>التصميم linkedin</option>
                <option value={1}>التصميم twitter</option>
                <option value={2}>التصميم whatsApp</option>
              </select>
              <button className={styles.button} type="submit">
                إرسال
              </button>
            </form>
          </div>
        </div>
        {design == 0 && (
          <div className={styles.container} id="content">
            <div className={styles.box}>
              <p className={styles.name}>{userName ? userName : ""}</p>
            </div>
            <img
              className={styles.img}
              src="/linkedin.jpg"
              alt="linkedIn"
              onClick={downloadPdf}
            />
          </div>
        )}
        {design == 1 && (
          <div className={styles.container} id="twitter">
            <div className={styles.boxTwitter}>
              <p className={styles.twitterp}>{userName ? userName : ""}</p>
            </div>
            <img
              className={styles.imgTwitter}
              src="/twitter.jpg"
              alt="twitter"
              onClick={downloadTwitter}
            />
          </div>
        )}
        {design == 2 && (
          <div className={styles.container} id="whatsApp">
            <div className={styles.boxWhatsApp}>
              <p className={styles.twitterp}>{userName ? userName : ""}</p>
            </div>
            <img
              className={styles.imgWhats}
              src="/whatsApp.jpg"
              alt="whatsApp"
              onClick={downloadWhatsApp}
            />
          </div>
        )}
        {/* </div> */}
      </main>

      <footer className={styles.footer}>
        <div>
          <span className={styles.logo}>
            <Image
              src="/logo copy.png"
              alt="najla Logo"
              width={150}
              height={100}
            />
          </span>
        </div>
        <div>
          <p>
            <a href="https://www.linkedin.com/in/najla-alofi/" target="_blank">
              prepared by Najla Alofi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
