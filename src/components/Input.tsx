import styled, {
  ReactNativeThemedStyledFunction
} from "styled-components/native";
import React, { useState } from "react";
import { TextInputProps } from "react-native";

interface OwnProps {}

const InputBase = styled.TextInput<{ focused: boolean }>`
  padding: 16px;
  padding-bottom: 13px;
  border-bottom-color: ${({ focused }) => (focused ? "red" : "rgba(0,0,0,0)")};
  border-bottom-width: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
`;

type Props = OwnProps & TextInputProps;

export default ({ ...props }: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputBase
      onBlur={() => {
        setFocus(false);
      }}
      onFocus={() => {
        setFocus(true);
      }}
      focused={focus}
      {...props}
    />
  );
};
