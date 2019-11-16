import React, { useEffect } from "react";
import { Block } from "components/Block";
import { AuthDataState } from "types/user";
import { useNavigation, useSelector, useAuth } from "modules/hooks";

const AuthLoading = () => {
  const navigation = useNavigation();
  const { auth, requesting, errors } = useAuth();
  useEffect(() => {
    !!auth && navigation.navigate("Home");
  }, [auth, requesting]);

  return <Block backgroundColor="midnight" flex />;
};

export default AuthLoading;
