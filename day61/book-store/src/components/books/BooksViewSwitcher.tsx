import styled from "styled-components";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect } from "react";

const viewOptions = [
  {
    value: "list",
    icon: "리스트"
  },
  {
    value: "grid",
    icon: "그리드"
  }
]

export type ViewMode = "grid" | "list"

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <BookViewSwitcherStyle>
      {viewOptions.map((option) =>
        <Button
          key={option.value}
          size="medium"
          scheme={searchParams.get(QUERYSTRING.VIEW) === option.value ? "primary" : "normal"}
          onClick={() => handleSwitch(option.value as ViewMode)}
        >
          {option.icon}
        </Button>
      )}
    </BookViewSwitcherStyle>
  )
}

const BookViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;
`;

export default BooksViewSwitcher;