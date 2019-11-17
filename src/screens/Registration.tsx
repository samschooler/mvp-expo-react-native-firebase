import React, { useState, useEffect, useContext, useRef } from "react";
import {
  SafeAreaBlock,
  Block,
  KeyboardAvoidingBlock,
  T
} from "components/Block";
import Button from "components/Button";
import Input from "components/Input";
import { register } from "store/actions/user";
import { RequestState } from "types/request";
import { useNavigation, useDispatch, useSelector } from "modules/hooks";
import { TextInput } from "react-native";

const Registration = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { requesting, errors, successful } = useSelector<RequestState>(
    state => state.registration
  );

  const passwordRef = useRef<TextInput>();

  useEffect(() => {
    if (successful) {
      navigation.navigate("AuthLoading");
    }
  }, [successful]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(register({ email, password }));
  };

  return (
    <Block backgroundColor="background" dFlex flex pb={6}>
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
          <Block mb={2}>
            <Input
              enablesReturnKeyAutomatically
              keyboardAppearance="dark"
              autoFocus
              value={email}
              onChangeText={t => setEmail(t)}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder="jerry@ski.club"
              placeholderTextColor="rgba(255,255,255,0.5)"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef?.current?.focus()}
            />
          </Block>
          <Block mb={2}>
            <Input
              ref={passwordRef}
              keyboardAppearance="dark"
              enablesReturnKeyAutomatically
              blurOnSubmit={false}
              returnKeyType="go"
              value={password}
              onChangeText={t => setPassword(t)}
              autoCapitalize="none"
              textContentType="password"
              secureTextEntry
              autoCompleteType="password"
              placeholder="•••••••••••"
              placeholderTextColor="rgba(255,255,255,0.5)"
              onSubmitEditing={onSubmit}
            />
            <Block mt={2}>
              <T type="subtitle1" color="textSecondary" ta="center">
                {errors[0]?.body || " "}
              </T>
            </Block>
          </Block>
          <Button
            mb={2}
            loading={requesting}
            onPress={onSubmit}
            disabled={email.length < 1 || password.length < 1 || requesting}
            o={email.length < 1 || password.length < 1 || requesting ? 0.5 : 1}
          >
            Register
          </Button>
          <Button
            mb={2}
            backgroundColor="background"
            textColor="textPrimary"
            onPress={() => navigation.navigate("FrontDoor")}
          >
            Back
          </Button>
        </Block>
      </KeyboardAvoidingBlock>
    </Block>
  );
};

export default Registration;
