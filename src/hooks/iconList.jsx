import React from "react";

import { ReactComponent as Loading } from "../assets/icons/Loading.svg";

import { ReactComponent as Paketus } from "../assets/icons/logo/Paketus.svg";

import { ReactComponent as DownBold } from "../assets/icons/arrows/DownBold.svg";
import { ReactComponent as Left } from "../assets/icons/arrows/Left.svg";
import { ReactComponent as Right } from "../assets/icons/arrows/Right.svg";
import { ReactComponent as Up } from "../assets/icons/arrows/Up.svg";
import { ReactComponent as Down } from "../assets/icons/arrows/Down.svg";
import { ReactComponent as Selector } from "../assets/icons/arrows/Selector.svg";

import { ReactComponent as Overview } from "../assets/icons/sidebar/Overview.svg";
import { ReactComponent as OverviewSolid } from "../assets/icons/sidebar/OverviewSolid.svg";
import { ReactComponent as Jobs } from "../assets/icons/sidebar/Jobs.svg";
import { ReactComponent as JobsSolid } from "../assets/icons/sidebar/JobsSolid.svg";
import { ReactComponent as Candidates } from "../assets/icons/sidebar/Candidates.svg";
import { ReactComponent as CandidatesSolid } from "../assets/icons/sidebar/CandidatesSolid.svg";
import { ReactComponent as TalentPools } from "../assets/icons/sidebar/TalentPools.svg";
import { ReactComponent as TalentPoolsSolid } from "../assets/icons/sidebar/TalentPoolsSolid.svg";
import { ReactComponent as Reports } from "../assets/icons/sidebar/Reports.svg";
import { ReactComponent as ReportsSolid } from "../assets/icons/sidebar/ReportsSolid.svg";
import { ReactComponent as Campaigns } from "../assets/icons/sidebar/Campaigns.svg";
import { ReactComponent as CampaignsSolid } from "../assets/icons/sidebar/CampaignsSolid.svg";
import { ReactComponent as Settings } from "../assets/icons/sidebar/Settings.svg";
import { ReactComponent as SettingsSolid } from "../assets/icons/sidebar/SettingsSolid.svg";

import { ReactComponent as Bell } from "../assets/icons/header/Bell.svg";
import { ReactComponent as Calendar } from "../assets/icons/header/Calendar.svg";

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

    // SIDEBAR
    case "overview":
      return <Overview />;
    case "overview active":
      return <OverviewSolid />;
    case "jobs":
      return <Jobs />;
    case "jobs active":
      return <JobsSolid />;
    case "candidates":
      return <Candidates />;
    case "candidates active":
      return <CandidatesSolid />;
    case "talent-pools":
      return <TalentPools />;
    case "talent-pools active":
      return <TalentPoolsSolid />;
    case "reports":
      return <Reports />;
    case "reports active":
      return <ReportsSolid />;
    case "campaigns":
      return <Campaigns />;
    case "campaigns active":
      return <CampaignsSolid />;
    case "settings":
      return <Settings />;
    case "settings active":
      return <SettingsSolid />;

    // HEADER
    case "bell":
      return <Bell />;
    case "calendar":
      return <Calendar />;

    default:
      return null;
  }
};

export default iconList;
