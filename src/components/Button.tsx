import styled from "styled-components";
import styledComponentsTS from "styled-components-ts";
import React from "react";

import { T, Block, BlockProps } from "components/Block";

interface OwnProps {
  children?: string;
  onPress?: () => void;
  disabled?: boolean;
}

type Props = OwnProps & BlockProps;

const ButtonHolder = styledComponentsTS<{}>(styled.TouchableOpacity)`

`;

export default ({ children, onPress, disabled, ...props }: Props) => (
  <ButtonHolder onPress={onPress} disabled={disabled}>
    <Block backgroundColor="primary" p={2} dFlex ai="center" br={4} {...props}>
      <T type="button" color="white">
        {children}
      </T>
    </Block>
  </ButtonHolder>
);
