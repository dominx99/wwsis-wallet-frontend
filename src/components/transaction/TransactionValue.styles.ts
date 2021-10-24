import styled from 'styled-components';

export const Value = styled.span`
  color: ${props => props.color ? props.theme[props.color] : props.theme.primary}
`;
