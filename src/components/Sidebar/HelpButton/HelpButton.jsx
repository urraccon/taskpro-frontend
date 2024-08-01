import React, { useState } from "react";
import PlantMobile from "../../../assets/img/plant-mobile.png";
import PlantMobileRetina from "../../../assets/img/plant-mobile@2x.png";
import PlantDeskAndTab from "../../../assets/img/plant-tab-des.png";
import PlantDeskAndTabRetina from "../../../assets/img/plant-tab-des@2x.png";
import iconsSprite from "../../../assets/svgSprite/iconsSprite.svg";

import {
  HelpContainer,
  TextHelp,
  TextHelpDecor,
  ButtonHelpContainer,
  ButtonHelp,
  ButtonIcon,
  TextHelpButton,
} from "./HelpButton.styled";

import NeedHelp from "../../NeedHelp/NeedHelp";

const CreateHelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHelp = () => {
    setIsModalOpen(true);
  };

  const closeModalHelp = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <HelpContainer>
        <picture>
          <source
            srcSet={`${PlantDeskAndTab}, ${PlantDeskAndTabRetina}`}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`${PlantDeskAndTab} , ${PlantDeskAndTabRetina}`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${PlantMobile} , ${PlantMobileRetina}`}
            media="(max-width: 767px)"
          />
          <img src={PlantMobile} alt="Plant" />
        </picture>
        <TextHelp>
          If you need help with <TextHelpDecor>TaskPro</TextHelpDecor>, check
          out our support resources or reach out to our cusmer support team.
        </TextHelp>
        <ButtonHelpContainer>
          <ButtonHelp
            onClick={openModalHelp}
            type="submit"
            aria-label="Need help"
          >
            <ButtonIcon>
              <use xlinkHref={`${iconsSprite}#icon-help-circle`} />
            </ButtonIcon>
          </ButtonHelp>
          <TextHelpButton>Need help?</TextHelpButton>
        </ButtonHelpContainer>
      </HelpContainer>
      {isModalOpen && (
        <Modal onClose={closeModalHelp}>
          <NeedHelp onClose={closeModalHelp} />
        </Modal>
      )}
    </>
  );
};

export default CreateHelpButton;
