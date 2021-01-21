import { FC, useContext } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

import { Button } from "@chakra-ui/react";
<<<<<<< HEAD
=======
import { useUser } from "../../utils/useUser";
>>>>>>> new-proyect/main

import { ConfigContext } from "../../context/Config";
import { ForeplanActiveStore } from "../../context/ForeplanContext";
import { track } from "../../context/Tracking";

const { activateForeplan, disableForeplan } = ForeplanActiveStore.actions;

const ForeplanModeSwitch: FC = () => {
  const isForeplanActive = ForeplanActiveStore.hooks.useIsForeplanActive();
  const {
    FOREPLAN_MODE_SWITCH_LABEL,
    FOREPLAN_MODE_SWITCH_ACTIVE_BACKGROUND_COLOR,
    FOREPLAN_MODE_SWITCH_INACTIVE_BACKGROUND_COLOR,
    FOREPLAN_MODE_SWITCH_ACTIVE_TEXT_COLOR,
    FOREPLAN_MODE_SWITCH_INACTIVE_TEXT_COLOR,
    FOREPLAN_MODE_SWITCH_HEIGHT,
    FOREPLAN_MODE_SWITCH_FONT_FAMILY,
    FOREPLAN_MODE_SWITCH_FONT_SIZE,
  } = useContext(ConfigContext);
<<<<<<< HEAD

=======
  const { user } = useUser();
>>>>>>> new-proyect/main
  return (
    <Button
      backgroundColor={
        isForeplanActive
          ? FOREPLAN_MODE_SWITCH_ACTIVE_BACKGROUND_COLOR
          : FOREPLAN_MODE_SWITCH_INACTIVE_BACKGROUND_COLOR
      }
      leftIcon={<AiOutlineSchedule />}
      rightIcon={isForeplanActive ? <FaToggleOn /> : <FaToggleOff />}
      colorScheme="blue"
      color={
        isForeplanActive
          ? FOREPLAN_MODE_SWITCH_ACTIVE_TEXT_COLOR
          : FOREPLAN_MODE_SWITCH_INACTIVE_TEXT_COLOR
      }
      cursor="pointer"
      height={FOREPLAN_MODE_SWITCH_HEIGHT}
      fontSize={FOREPLAN_MODE_SWITCH_FONT_SIZE}
      fontFamily={FOREPLAN_MODE_SWITCH_FONT_FAMILY}
      transition="all 1s"
<<<<<<< HEAD
=======
      mt={user?.config?.SHOW_DROPOUT ? "0px" : "190px"}
>>>>>>> new-proyect/main
      onClick={() => {
        if (isForeplanActive) {
          disableForeplan();
          track({
            action: "click",
            effect: "disable_foreplan",
            target: "foreplan_mode_switch_button",
          });
        } else {
          activateForeplan();
          track({
            action: "click",
            effect: "activate_foreplan",
            target: "foreplan_mode_switch_button",
          });
        }
      }}
    >
      {FOREPLAN_MODE_SWITCH_LABEL}
    </Button>
  );
};

export default ForeplanModeSwitch;
