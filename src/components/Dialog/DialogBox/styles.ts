import styled from "styled-components";

export const DialogBoxContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => props.theme['background']};
    border-radius: 8px;
    font-size: 0.8rem;
    padding: 1.5rem;

    @media (max-width: 600px) {
      padding: 0.8rem;
    }
`

export const Speaker = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme['black']};
`

export const Text = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme['black']};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 1rem;
  gap: 0.75rem;
  flex-wrap: wrap;
`