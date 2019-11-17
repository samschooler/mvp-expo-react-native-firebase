import styled from "styled-components/native";
import React from "react";

import { T, Block, BlockProps } from "components/Block";
import colors, { ColorType } from "modules/colors";
import { ActivityIndicator } from "react-native";

interface OwnProps {
  children?: string;
  textColor?: ColorType;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

type Props = OwnProps & BlockProps;

const ButtonHolder = styled.TouchableOpacity``;

export default ({
  children,
  onPress,
  disabled,
  textColor,
  loading,
  ...props
}: Props) => (
  <ButtonHolder onPress={onPress} disabled={disabled}>
    <Block
      backgroundColor="buttonPrimary"
      p={2}
      dFlex
      ai="center"
      br={4}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={textColor || colors.buttonTextPrimary} />
      ) : (
        <T type="button" color={textColor || "buttonTextPrimary"}>
          {children}
        </T>
      )}
    </Block>
  </ButtonHolder>
);
