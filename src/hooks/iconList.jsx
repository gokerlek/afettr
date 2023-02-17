import React from "react";

import { ReactComponent as Loading } from "../assets/icons/Loading.svg";

import { ReactComponent as Paketus } from "../assets/icons/logo/Logo.svg";

import { ReactComponent as DownBold } from "../assets/icons/arrows/DownBold.svg";
import { ReactComponent as Left } from "../assets/icons/arrows/Left.svg";
import { ReactComponent as Right } from "../assets/icons/arrows/Right.svg";
import { ReactComponent as Up } from "../assets/icons/arrows/Up.svg";
import { ReactComponent as Down } from "../assets/icons/arrows/Down.svg";
import { ReactComponent as Selector } from "../assets/icons/arrows/Selector.svg";

import { ReactComponent as Shelter } from "../assets/icons/pointers/Shelter.svg";
import { ReactComponent as SafeAreaAtNight } from "../assets/icons/pointers/SafeAreaAtNight.svg";
import { ReactComponent as Wc } from "../assets/icons/pointers/Wc.svg";
import { ReactComponent as SafeSpot } from "../assets/icons/pointers/SafeSpot.svg";
import { ReactComponent as MyLocation } from "../assets/icons/pointers/MyLocation.svg";
import { ReactComponent as SoupKitchen } from "../assets/icons/pointers/SoupKitchen.svg";
import { ReactComponent as Clothes } from "../assets/icons/pointers/Clothes.svg";

import { ReactComponent as ShelterNoLabel } from "../assets/icons/pointers/nolabel/Shelter.svg";
import { ReactComponent as ClothesNoLabel } from "../assets/icons/pointers/nolabel/Clothes.svg";

import { ReactComponent as Bell } from "../assets/icons/header/Bell.svg";
import { ReactComponent as Calendar } from "../assets/icons/header/Calendar.svg";

import { ReactComponent as Apple } from "../assets/icons/header/Apple.svg";
import { ReactComponent as Google } from "../assets/icons/header/Google.svg";

const iconList = (purpose, { width, height, color }) => {
  switch (purpose) {
    //LOGO
    case "logo":
      return <Paketus />;

    case "loading":
      return <Loading />;

    //ARROWS
    case "down-bold":
      return <DownBold />;
    case "left":
      return <Left />;
    case "right":
      return <Right />;
    case "up":
      return <Up />;
    case "down":
      return <Down />;
    case "selector":
      return <Selector />;

    // POINTERS WITH LABELS
    case "shelter":
      return <Shelter />;
    case "safe-area-at-night":
      return <SafeAreaAtNight />;
    case "wc":
      return <Wc />;
    case "safe-spot":
      return <SafeSpot />;
    case "my-location":
      return <MyLocation />;
    case "soup-kitchen":
      return <SoupKitchen />;
    case "clothes":
      return <Clothes />;

    // POINTERS WITHOUT LABELS
    case "shelter-no-label":
      return <ShelterNoLabel />;
    case "clothes-no-label":
      return <ClothesNoLabel />;

    // HEADER
    case "bell":
      return <Bell />;
    case "calendar":
      return <Calendar />;
    case "apple":
      return <Apple />;
    case "google":
      return <Google />;

    default:
      return null;
  }
};

export default iconList;
