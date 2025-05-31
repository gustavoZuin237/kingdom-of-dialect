import styled from "styled-components";

import { NavLink } from "react-router-dom";

type ButtonProps = {
  variant: 'white' | 'black' | 'white-outline' | 'black-outline';
  disabled?: boolean
};

export const ButtonContainer = styled(NavLink)<ButtonProps>`
    ${({ variant, theme }) => {
        switch (variant) {
            case 'white':
                return `
                    color: ${theme.text};
                `;

            case 'black':
                return `
                    color: ${theme.black};
                `;

            case 'white-outline':
                return `
                    color: ${theme.text};
                    border: 1px solid ${theme.black};

                    &:focus {
                        border: 1px solid ${theme.black};
                    }
                `;

            case 'black-outline':
                return `
                    color: ${theme.black};
                    border: 1px solid ${theme.black};

                    &:focus {
                        border: 1px solid ${theme.black};
                    }
                `;
        
            default:
                break;
        }
    }}

    width: auto;
    min-width: 8rem;
    height: 4rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    font-size: 1.5rem;
    font-family: "PixelifySans", sans-serif;
    text-decoration: none;
    text-align: center;
    background-color: ${(props) => props.theme['background-light']};
    
    &:hover {
        opacity: 0.75;

        ${({ disabled }) => {
            if (disabled) {
                return `
                    cursor: not-allowed;
                `
            }
            else {
                return `
                    cursor: pointer;
                `
            }
        }}
    }

    @media (max-width: 960px) {
        height: 2rem;
        font-size: 1.25rem;
        padding: 0.75rem;
    }
`