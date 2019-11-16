import React from "react";
import { T, SafeAreaBlock } from "components/Block";
import { AuthDataState, UserDataState } from "types/user";
import { useNavigation, useSelector, useAuth } from "modules/hooks";

const AuthLoading = () => {
  const navigation = useNavigation();
  const { auth } = useAuth();
  const { user } = useSelector<UserDataState>(state => state.user);

  return (
    <SafeAreaBlock backgroundColor="midnight" flex>
      <T color="primary" type="body1">
        {auth.email} {user?.firstName}
      </T>
    </SafeAreaBlock>
  );
};

export default AuthLoading;
