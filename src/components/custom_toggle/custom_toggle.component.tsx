import {useState} from 'react';
import styled from 'styled-components';

interface CustomProps {
    bubble?:any;
}

const CustomToggle = ({bubble}: CustomProps) => {

    const [checked, setChecked] = useState(false);

    const togglerHandler = () => {
        setChecked(!checked);
        bubble && bubble();
    }

    return (
        <InputWrapper>
            <Input type='checkbox' checked={checked} onChange={togglerHandler} />
            <Slider />
        </InputWrapper>
    )
};

export default CustomToggle;



const InputWrapper = styled.label`
  position: relative;
`;
const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: #71a0fa;

    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &:focus:checked + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 48px;
  height: 19px;
  border-radius: 100px;
  background-color: #797878;
  position: relative;
  transition: background-color 0.5s, box-shadow 0.5s;

  &:before {
    content: "";
    position: absolute;;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 21px;
    transition: 0.5s;
    background-color: #d8e3fa;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }

  &:active:before {
    width: 28px;
  }
`;