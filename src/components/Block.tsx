import styled from "styled-components/native";
import {
  AlignItemsProperty,
  BoxShadowProperty,
  CursorProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  TextAlignProperty
} from "csstype";

import colors, { ColorType } from "modules/colors";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "button"
  | "overline"
  | "caption";

interface BlockChildrenAllowed {
  children?: any;
}

interface TextChildrenAllowed {
  children?: string;
}

interface MustType {
  type: TextType;
}

interface BaseInlineProps {
  color?: ColorType;
  ta?: TextAlignProperty;
  fsize?: number;
}

interface BaseBlockProps {
  w?: number;
  h?: number;

  m?: number;
  mh?: number;
  mv?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  p?: number;
  ph?: number;
  pv?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;

  b?: string;
  bc?: ColorType;

  dFlex?: boolean;
  flex?: number | boolean;
  fg?: number;
  fs?: number;
  fb?: string;
  fd?: FlexDirectionProperty;
  fw?: FlexWrapProperty;
  ai?: AlignItemsProperty;
  jc?: JustifyContentProperty;

  br?: number;

  o?: number;

  backgroundColor?: ColorType;
  boxShadow?: BoxShadowProperty;
  c?: CursorProperty;
}

const spacingUnit = 6;

export type BlockProps = BaseBlockProps & BlockChildrenAllowed;
export type TextProps = MustType & BaseInlineProps;

const textStyle = (type: TextType) => {
  switch (type) {
    case "body1":
      return `
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 28px;
				letter-spacing: 0.25px;
			`;
    case "body2":
      return `
				font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 20px;
			`;
    case "subtitle1":
      return `
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 24px;
				letter-spacing: 0.15px;
			`;
    case "subtitle2":
      return `
				font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 24px;
			`;
    case "button":
      return `
				font-style: normal;
				font-weight: 500;
				font-size: 14px;
				line-height: 16px;
				letter-spacing: 0.75px;
				text-transform: uppercase;
			`;
    case "overline":
      return `
				font-style: normal;
				font-weight: 500;
				font-size: 10px;
				line-height: 16px;
				letter-spacing: 1.5px;
				text-transform: uppercase;
			`;
    case "caption":
      return `
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 16px;
				letter-spacing: 0.4px;
				opacity: 0.6;
			`;
    case "h6":
      return `
				font-style: normal;
				font-weight: 500;
				font-size: 20px;
				letter-spacing: 0.15px;
			`;
    default:
      return ``;
  }
};

const inlineStyles = (props: BaseInlineProps) => `
${
  props.color
    ? `color: ${colors[props.color] ? colors[props.color] : props.color}`
    : ""
};
	${props.ta ? `text-align: ${props.ta}` : ""};
	${typeof props.fsize === "number" ? `font-size: ${props.fsize}px` : ""};
`;

const blockStyles = (props: BlockProps) => `
	${typeof props.w === "number" ? `width: ${props.w}px` : ""};
	${typeof props.h === "number" ? `height: ${props.h}px` : ""};
	${typeof props.b === "string" ? `border: ${props.b}` : ""};
	${
    typeof props.bc === "string"
      ? `border-color: ${colors[props.bc] ? colors[props.bc] : props.bc}`
      : ""
  };

	${
    typeof props.p === "number"
      ? `padding: ${props.p * spacingUnit}px`
      : "padding: 0px;"
  };
	${
    typeof props.ph === "number" || props.pl
      ? `padding-left: ${(props.ph || props.pl) * spacingUnit}px`
      : ""
  };
	${
    typeof props.ph === "number" || props.pr
      ? `padding-right: ${(props.ph || props.pr) * spacingUnit}px`
      : ""
  };
	${
    typeof props.pv === "number" || props.pt
      ? `padding-top: ${(props.pt || props.pv) * spacingUnit}px`
      : ""
  };
	${
    typeof props.pv === "number" || props.pb
      ? `padding-bottom: ${(props.pb || props.pv) * spacingUnit}px`
      : ""
  };

	${
    typeof props.m === "number"
      ? `margin: ${props.m * spacingUnit}px`
      : "margin: 0px;"
  };
	${
    typeof props.mh === "number" || props.ml
      ? `margin-left: ${(props.mh || props.ml) * spacingUnit}px`
      : ""
  };
	${
    typeof props.mh === "number" || props.mr
      ? `margin-right: ${(props.mh || props.mr) * spacingUnit}px`
      : ""
  };
	${
    typeof props.mv === "number" || props.mt
      ? `margin-top: ${(props.mt || props.mv) * spacingUnit}px`
      : ""
  };
	${
    typeof props.mv === "number" || props.mb
      ? `margin-bottom: ${(props.mb || props.mv) * spacingUnit}px`
      : ""
  };

	${
    props.backgroundColor
      ? `background-color: ${colors[props.backgroundColor]}`
      : ""
  };
	${props.boxShadow ? `box-shadow: ${props.boxShadow}` : ""};
	${props.c ? `cursor: ${props.c}` : ""};
  ${props.br ? `border-radius: ${props.br}px` : ""};

	${props.dFlex ? `display: flex` : ""};

	${
    props.flex
      ? `flex: ${
          typeof props.flex === "boolean" && props.flex ? 1 : props.flex
        }`
      : ""
  };
	${props.fd ? `flex-direction: ${props.fd}` : ""};
	${props.fw ? `flex-wrap: ${props.fw}` : ""};
	${props.fb ? `flex-basis: ${props.fb}` : ""};
	${props.fg ? `flex-grow: ${props.fg}` : ""};
	${props.fs ? `flex-shrink: ${props.fs}` : ""};
	${props.ai ? `align-items: ${props.ai}` : ""};
	${props.jc ? `justify-content: ${props.jc}` : ""};


	${props.o ? `opacity: ${props.o}` : ""};
`;

export const T = styled.Text<TextProps>`
  ${(props: MustType) => textStyle(props.type)}
  ${(props: BaseInlineProps) => inlineStyles(props)}
`;

export const Block = styled.View<BlockProps>`
  ${(props: BlockProps) => blockStyles(props)}
`;

export const SafeAreaBlock = styled.SafeAreaView<BlockProps>`
  ${(props: BlockProps) => blockStyles(props)}
`;

export const KeyboardAvoidingBlock = styled.KeyboardAvoidingView<BlockProps>`
  ${(props: BlockProps) => blockStyles(props)}
`;

export const Button = styled.TouchableOpacity<BlockProps>`
  ${(props: BlockProps) => blockStyles(props)}
`;
