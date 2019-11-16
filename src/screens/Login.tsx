import React, { useState, useEffect, useContext } from "react";
import { SafeAreaBlock, Block } from "components/Block";
import Button from "components/Button";
import Input from "components/Input";
import { login } from "store/actions/user";
import { RequestState } from "types/request";
import { useNavigation, useDispatch, useSelector } from "modules/hooks";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { requesting, errors, successful } = useSelector<RequestState>(
    state => state.login
  );

  useEffect(() => {
    if (successful) {
      navigation.navigate("AuthLoading");
    }
  }, [successful]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(login({ email, password }));
  };

  return (
    <Block backgroundColor="midnight" flex>
      <SafeAreaBlock dFlex flex>
        <Block flex dFlex fd="column" jc="flex-end" ph={2} mb={8}>
          <Block flex={2} ai="center" jc="center">
            <Block br={50} w={100} h={100} backgroundColor="primary" />
          </Block>
          <Block flex={3}>
            <Block mb={2}>
              <Input
                value={email}
                onChangeText={t => setEmail(t)}
                autoCapitalize="none"
                autoCompleteType="email"
                placeholder="sam@example.com"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </Block>
            <Block mb={6}>
              <Input
                value={password}
                onChangeText={t => setPassword(t)}
                autoCapitalize="none"
                textContentType="password"
                autoCompleteType="password"
                placeholder="•••••••••••"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </Block>
            <Button
              onPress={onSubmit}
              disabled={email.length < 1 || password.length < 1}
              o={email.length < 1 || password.length < 1 ? 0.5 : 1}
            >
              Login
            </Button>
          </Block>
        </Block>
      </SafeAreaBlock>
    </Block>
  );
};

export default Login;
