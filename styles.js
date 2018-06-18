import styled, {css} from 'styled-components';

/**************
** VARIABLES **
**************/
export const Colors = {
  white:  '#FFFFFF',
  border: '#EBEBEB',
  text:   '#4A4A4A',
  red:    '#FA4768',
  orange: '#FD9F28',
  blue:   '#0B73FF',
  purple: '#6C00B8',
  green:  '#57E3C3',
  action: '#4995EF',
};

const BorderRadius = '6px';
const GenericBorder = `1px solid ${Colors.border};`

/*********
** TEXT **
*********/
const TextBase = styled.Text`
  color: ${Colors.text};
  font-family: Avenir Next;
  ${props => props.color && css`
    color: ${Colors[props.color]};
  `};
  ${props => props.weight && css`
    font-family: ${'AvenirNext-' + props.weight};
  `};
  ${props => props.paddingBottom && css`
    padding-bottom: ${props.paddingBottom};
  `};
  ${props => props.action && css`
    color: ${Colors.action};
  `};
`;

export const LogoText = TextBase.extend`
  font-family: Avenir-heavy;
  font-size: 26;
  text-align: center;
  margin-left: 2;
`;

export const Medium36 = TextBase.extend`
  font-family: AvenirNext-Medium;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: -0.15px;
  margin-top: -10px;
`;

export const DemiBold23 = TextBase.extend`
  font-family: AvenirNext-DemiBold;
  font-size: 23px;
  line-height: 31px;
`;

export const DemiBold22 = TextBase.extend`
  font-family: AvenirNext-DemiBold;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.58px;
`;

export const DemiBold18 = TextBase.extend`
  font-family: AvenirNext-DemiBold;
  font-size: 18px;
  line-height: 39px;
  letter-spacing: -0.58px;
`;

export const Medium15 = TextBase.extend`
  font-family: AvenirNext-Medium;
  font-size: 15px;
  line-height: 20px;
`;

export const Medium14 = TextBase.extend`
  font-family: AvenirNext-Medium;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.05px;
`;

/***************
** CONTAINERS **
***************/
export const StyledView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.white};
  ${props => props.padded && css`
    padding: 20px 15px;
  `};
`;

export const ScrollableContent = styled.FlatList`
  flex: 1;
  width: 100%;
`

export const BlockListItem = styled.View`
  background: white;
  border-radius: ${BorderRadius};
  width: 100%;
  margin-bottom: 12px;
  border: ${GenericBorder};
  padding: 12px 18px;
  ${props => props.color && css`
    background: ${Colors[props.color]};
    border: 0;
  `};
`

/********
** NAV **
********/
export const StyledNav = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-color: ${Colors.border};
  border-bottom-width: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
