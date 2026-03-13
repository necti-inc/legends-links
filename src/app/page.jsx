import style from "./page.module.css";
import theme from "./theme";
import Head from "next/head";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { faStore, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import DUSTIN from "../../public/Dustin-Image.jpg";
import LOGO from "../../public/Logo-White.png";
import Button from "@/components/button/Button";
import Spacer from "@/components/spacer/Spacer";

export default function Home() {
  return (
    <div className={style.rootContainer}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <Image
            className={style.circleImage}
            src={DUSTIN}
            alt={"Dustin Williams"}
          />
          <h1 className={style.name}>
            DUSTIN
            <br />
            WILLIAMS
          </h1>
          <Image className={style.logo} src={LOGO} alt={"Logo"} />
        </div>
        <div className={style.rightContainer}>
          <div>
            <Button
              link={"mailto:biz@legends.media"}
              icon={faPeopleGroup}
              title={"WORK WITH ME"}
            />
            <Spacer />
            <Button
              link={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/youtube"}
              icon={faYoutube}
              title={"YOUTUBE"}
            />
            <Spacer />

            <Button
              link={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/shop"}
              icon={faStore}
              title={"LEGENDS MEDIA"}
            />
            <Spacer />

            <Button
              link={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/instagram"}
              icon={faInstagram}
              title={"INSTAGRAM"}
            />
            <Spacer />

            <Button
              link={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/facebook"}
              icon={faFacebook}
              title={"FACEBOOK"}
            />
            <Spacer />

            <Button
              link={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/tiktok"}
              icon={faTiktok}
              title={"TIK TOK"}
            />
            <Spacer />

            <Button
              link={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/twitch"}
              icon={faTwitch}
              title={"TWITCH"}
            />
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <a href={"mailto:biz@legends.media"} className={style.lowerLink}>
          EMAIL: BIZ@LEGENDS.MEDIA
        </a>
        <p className={style.seperator}>|</p>
        <a
          target={"_blank"}
          href={"https://us-central1-premier-ikon.cloudfunctions.net/dustins-links-monitor/shop"}
          className={style.lowerLink}
        >
          WEBSITE: WWW.LEGENDS.MEDIA
        </a>
      </div>
    </div>
  );
}
