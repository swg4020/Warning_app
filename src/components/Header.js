import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiAlarmWarningLine } from "react-icons/ri";
import { glovalcolor, glovalpadding } from "./GlobalStyled";

const SHeader = styled.header`
  padding: ${glovalpadding.paddingO};
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background-color: ${glovalcolor.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
font-size: 30px;
font-weight: 700;
  svg {
    color: crimson;
  }
`;

const Search = styled.h2``;

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/"}>
        <Logo>
          <RiAlarmWarningLine />
          Warning
        </Logo>
      </Link>
      <Link to={"/search/"}>
        <Search>
          search
        </Search>
      </Link>
    </SHeader>
  );
};
