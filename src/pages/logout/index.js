import { useEffect } from "react";
import { useResetRecoilState } from "recoil";
import { useNavigate } from "react-router";

import { userState } from "recoil/atom/user";

const Logout = () => {
  const navigate = useNavigate();

  const resetUser = useResetRecoilState(userState);

  useEffect(() => {
    navigate("/login");
    resetUser();
  }, []);

  return <></>;
};

export default Logout;
