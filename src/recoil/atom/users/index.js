import { atom } from "recoil";

import { localStorageEffect } from "common/utils";

// serves as a dummy database for users
const usersState = atom({
  key: "usersState",
  default: [],
  effects: [localStorageEffect("usersState")],
});

export { usersState };
