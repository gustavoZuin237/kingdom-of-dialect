import styled from "styled-components";

export const DialogBoxContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme['background']};
    border-radius: 8px;

    padding: 1.5rem;

    font-size: 0.8rem;
`

export const Speaker = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: ${(props) => props.theme['black']};
`

export const Text = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme['black']};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 0.75rem;
  flex-wrap: wrap;
`