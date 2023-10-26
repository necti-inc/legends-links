import style from "./page.module.css";
import theme from "./theme";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { faStore, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import DUSTIN from "../../public/Dustin.png";
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
              link={"https://www.youtube.com/@dustiinw"}
              icon={faYoutube}
              title={"YOUTUBE"}
            />
            <Spacer />

            <Button
              link={"https://legends.media/"}
              icon={faStore}
              title={"LEGENDS MEDIA"}
            />
            <Spacer />

            <Button
              link={"https://www.instagram.com/dustiinw/"}
              icon={faInstagram}
              title={"INSTAGRAM"}
            />
            <Spacer />

            <Button
              link={"https://www.facebook.com/officialdustinwilliams/"}
              icon={faFacebook}
              title={"FACEBOOK"}
            />
            <Spacer />

            <Button
              link={"https://www.tiktok.com/@dustiinw?lang=en"}
              icon={faTiktok}
              title={"TIK TOK"}
            />
            <Spacer />

            <Button
              link={"https://www.twitch.tv/dutofficial"}
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
          href={"https://www.legends.media"}
          className={style.lowerLink}
        >
          WEBSITE: WWW.LEGENDS.MEDIA
        </a>
      </div>
    </div>
  );
}
