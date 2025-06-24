import React, { ForwardedRef } from "react";
import { styled } from "styled-components";

interface Props {
  placeholder?: string;
}

const InputText = React.forwardRef((
  { placeholder }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div>
      <InputTextStyle placeholder={placeholder} ref={ref} />
    </div>
  );
});

const InputTextStyle = styled.input.attrs({ type: "text" })`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  line-height: 1.5;
  color: 1px solid ${({ theme }) => theme.color.text};
`;

export default InputText;