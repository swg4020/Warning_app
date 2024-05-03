import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiAlarmWarningLine } from "react-icons/ri";

const SHeader = styled.header`
  padding: 20px;
`;

const Logo = styled.div`
  svg {
    color: crimson;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/"}>
        <Logo>
          <RiAlarmWarningLine />
          Warning
        </Logo>
      </Link>
    </SHeader>
  );
};
