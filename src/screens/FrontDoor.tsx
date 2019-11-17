import React, { useState, useEffect, useContext } from "react";
import { SafeAreaBlock, Block, KeyboardAvoidingBlock } from "components/Block";
import Button from "components/Button";
import Input from "components/Input";
import { login } from "store/actions/user";
import { RequestState } from "types/request";
import { useNavigation, useDispatch, useSelector } from "modules/hooks";

const FrontDoor = () => {
  const navigation = useNavigation();

  return (
    <Block backgroundColor="background" dFlex flex pb={8}>
      <KeyboardAvoidingBlock
        flex
        dFlex
        fd="column"
        jc="flex-end"
        ph={2}
        behavior="padding"
        enabled
      >
        <Block flex={2} ai="center" jc="center" pt={6}>
          <Block br={50} w={100} h={100} backgroundColor="textPrimary" />
        </Block>
        <Block flex={3} jc="flex-end">
          <Button mb={2} onPress={() => navigation.navigate("Login")}>
            Login
          </Button>
          <Button onPress={() => navigation.navigate("Registration")}>
            Register
          </Button>
        </Block>
      </KeyboardAvoidingBlock>
    </Block>
  );
};

export default FrontDoor;
