import styled from 'styled-components';

export const CompareContainer = styled.div`
  display: grid;
  > * {
    grid-area: 1 / 1;
  }
  > section {
    display: grid;
    place-content: center;
  }
  border: none;
`;

export const BeforeSection = styled.section`
  clip-path: inset(0 calc(100% - var(--pos, 50%)) 0 0);
`;

export const AfterSection = styled.section`
  clip-path: inset(0 0 0 var(--pos, 50%));
`;

export const RangeInput = styled.input`
  z-index: 1;
  appearance: none;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 5px;
    height: 100dvh;
    background-color: CanvasText;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 4px;
    height: 100dvh;
    background-color: CanvasText;
  }
`;
