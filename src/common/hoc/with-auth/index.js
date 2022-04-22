import { useRecoilValue } from "recoil";

import { userState } from "recoil/atom/user";

const WithAuth = ({ children }) => {
  const user = useRecoilValue(userState);

  if (!user?.email) {
    window.location.href = "/login";
    return;
  }

  return <>{children}</>;
};

export default WithAuth;
