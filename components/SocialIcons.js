import React from "react";
import {
  TbBrandTelegram,
  TbBrandTwitter,
  TbMail,
  TbBrandInstagram,
} from "react-icons/tb";

export default function SocialIcons() {
  const Socials = [
    {
      link: "https://twitter.com/Artist_4_web3",
      font: "body1",
      icon: <TbBrandTwitter />,
    },
    {
      link: "mailto:hello@assetmantle.one",
      font: "body1",
      icon: <TbMail />,
    },
    {
      link: "https://t.me/Artist4Web3",
      font: "body1",
      icon: <TbBrandTelegram />,
    },
    {
      link: "https://www.instagram.com/assetmantle/",
      font: "body1",
      icon: <TbBrandInstagram />,
    },
  ];
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center">
      {React.Children.toArray(
        Socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`text-white  ${social.font}`}
            style={{ lineHeight: "100% !important" }}
          >
            {social.icon}
          </a>
        ))
      )}
    </div>
  );
}
