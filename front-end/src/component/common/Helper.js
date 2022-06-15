import React from "react";

export const validateNoOfParticipate = (game, pple) => {
  var returnFlag = true;
  if (game === "Football") {
    if (pple >= 8) {
      returnFlag = false;
    } else {
      returnFlag = true;
    }
  }
  if (game === "Volleyball") {
    if (pple >= 8) {
      returnFlag = false;
    } else {
      returnFlag = true;
    }
  }
  if (game === "Badminton") {
    if (pple >= 2) {
      returnFlag = false;
    } else {
      returnFlag = true;
    }
  }
  if (game === "Basketball") {
    if (pple >= 8) {
      returnFlag = false;
    } else {
      returnFlag = true;
    }
  }
  if (game === "Kabaddi") {
    if (pple >= 10) {
      returnFlag = false;
    } else {
      returnFlag = true;
    }
  }
  return returnFlag;
};

export const getParticipateLimit = (game) => {
  var limit = 10;
  if (game === "Football") {
    limit = 8;
  }
  if (game === "Volleyball") {
    limit = 8;
  }
  if (game === "Badminton") {
    limit = 2;
  }
  if (game === "Basketball") {
    limit = 8;
  }
  if (game === "Kabaddi") {
    limit = 10;
  }
  if (game === "5K Run" || game === "Chess") {
    limit = 1;
  }
  if (game === "Table Tennis") {
    limit = 2;
  }
  return limit;
};

export const checkParticipateLimit = (game, pple) => {
  var returnFlag = true;
  if (game === "Football") {
    if (pple >= 5) {
      returnFlag = true;
    } else {
      returnFlag = false;
    }
  }
  if (game === "Volleyball") {
    if (pple >= 6) {
      returnFlag = true;
    } else {
      returnFlag = false;
    }
  }
  if (game === "Badminton") {
    if (pple >= 1) {
      returnFlag = true;
    } else {
      returnFlag = false;
    }
  }
  if (game === "Basketball") {
    if (pple >= 5) {
      returnFlag = true;
    } else {
      returnFlag = false;
    }
  }
  if (game === "Kabaddi") {
    if (pple >= 7) {
      returnFlag = true;
    } else {
      returnFlag = false;
    }
  }
  if (game === "5K Run" || game === "Chess" || game === "Table Tennis") {
    if (pple >= 1) {
      returnFlag = true;
    } else {
      returnFlag = false;
    }
  }

  return returnFlag;
};

export const getMandatoryPlayersLimit = (game) => {
  var limit = 1;
  if (game === "Football") {
    limit = 5;
  }
  if (game === "Volleyball") {
    limit = 6;
  }
  if (game === "Badminton") {
    limit = 1;
  }
  if (game === "Basketball") {
    limit = 5;
  }
  if (game === "Kabaddi") {
    limit = 7;
  }
  if (game === "5K Run" || game === "Chess" || game === "Table Tennis") {
    limit = 1;
  }

  return limit;
};
