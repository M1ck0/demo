import { atom } from "recoil";

import { localStorageEffect } from "common/utils";

const userState = atom({
  key: "userState",
  default: {},
  effects: [localStorageEffect("userState")],
});

export { userState };
