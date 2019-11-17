import styled, {
  ReactNativeThemedStyledFunction
} from "styled-components/native";
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import colors from "modules/colors";

interface OwnProps {}

const InputBase = styled.TextInput<{ focused: boolean }>`
  padding: 16px;
  padding-bottom: 13px;
  border-bottom-color: ${({ focused }) => (focused ? "red" : "rgba(0,0,0,0)")};
  border-bottom-width: 3px;
  background-color: ${colors.inputPrimary};
  color: ${colors.inputTextPrimary};
`;

type Props = OwnProps & TextInputProps;

export default React.forwardRef<styled.TextInput, Props>(
  ({ ...props }: Props, ref) => {
    const [focus, setFocus] = useState(false);

    return (
      <InputBase
        ref={ref}
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
  }
);
