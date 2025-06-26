import styled from "styled-components";
import Title from "../common/Title";
import { Link } from "react-router-dom";

function BooksEmpty() {
  return (
    <BooksEmpthStyle>
      <Title size="large" color="secondary">
        검색 결과가 없습니다.
      </Title>
      <p><Link to="/books">전체 검색 결과로 이동</Link></p>
    </BooksEmpthStyle>
  )
}

const BooksEmpthStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 120px 0;
`;

export default BooksEmpty;