import styled from 'styled-components';
import CustomToggle from "../custom_toggle/custom_toggle.component";
import {useState} from "react";
import {Icons} from "../../constants/index.constants";

interface GroupTogglerProps {
        isCollapsed?: boolean,
        setValue?: any,


}

const GroupToggler = ({isCollapsed, setValue}: GroupTogglerProps) => {
    const [activeIcon, setIcon] = useState('down');
    const [isChecked, setChecked] = useState(false);


    const handleToggler = () => {

    }

    const dropDown = () => {
        setValue(!isCollapsed);
    }
    return (
        <TogglerDropdown>
            <CenterContent>
                <CardTitle>
                    Users
                </CardTitle>
                <Action>
                    <CustomToggle />
                    <IconWrapper onClick={dropDown}>
                        <Icon src={Icons.CaretDown}/>
                    </IconWrapper>
                </Action>
            </CenterContent>
            <DropdownContent>

            </DropdownContent>
        </TogglerDropdown>
    )
};

export default GroupToggler;


const TogglerDropdown = styled.div`
  width: 100%;
  min-height: 80px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24262c;
  border-radius: 8px;
  transition: height 0.5s;
`;

const CenterContent = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-size: 14px;
  color: #d8e3fa;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Action = styled.div`
  display: flex;
  width: 110px;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
    width: 20px;
    height: 10px; 
    display: flex;
    align-items: center;
  
  &:hover {
    cursor: pointer;
    transform: translate(2);
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;


const DropdownContent = styled.div<GroupTogglerProps>`
  display: ${props => props.isCollapsed ? 'hidden' : 'visible'};
`;

