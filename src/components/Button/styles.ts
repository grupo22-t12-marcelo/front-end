import { Button } from "reactstrap";
import styled from "styled-components";

interface Props {
  backgroundColor: string;
  color: string;
  width: number;
  height: number;
}

export const Container = styled.button<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border-radius: 4px;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 0;
`;
