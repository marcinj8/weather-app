import Styled from 'styled-components';

export const StyledInput = Styled.input`
    position: absolute;
    width: 200px;
    padding: 16px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    color: white;
    font-weight: bolder;
    font-size: 15px;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    :focus{
        box-shadow: inset 0 -2px 1px rgba(256, 256, 256, 0.53);
    }
    ::placeholder {
        color: white;
  }
  `;

export const StyledNewCityButton= Styled.button`
    position: absolute;
    right: 15px;
    padding: 16px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    color: white;
    font-weight: bolder;
    font-size: 15px;
    cursor: pointer;
  `;
