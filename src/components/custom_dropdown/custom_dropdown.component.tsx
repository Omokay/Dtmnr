import {useState} from 'react';
import styled from 'styled-components';
import CustomToggle from "../custom_toggle/custom_toggle.component";
import {Icons} from '../../constants/index.constants'
import CustomSelect from "../react_select/react_select.component";

interface DropdownProps {
    children: any,
    item: string,
    index: number,
}

const CustomDropdown = ({children, item, index}: DropdownProps) => {
    const [selected, setSelected] = useState(null);

    const togglePane = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    }
    return (
            <Item >
                <ItemContent>
                    <Title>{item}</Title>
                    <Action>
                        <CustomToggle/>
                        <Caret onClick={() => togglePane(index)}>
                            <Drop src={Icons.CaretDown} />
                        </Caret>
                    </Action>
                </ItemContent>

                {
                    (selected) ? (
                        <ContentShow>
                            {
                                (children && children).map((child, index) => {
                                    if (child.hasSelect === false) {
                                        return (
                                            <Child key={index}>
                                                <CenterContent>
                                                    <CardTitle>{child.action}</CardTitle>
                                                    <CustomToggle />
                                                </CenterContent>
                                            </Child>
                                        )
                                    } else {
                                        return (
                                            <Child key={index}>
                                                <CenterContent>
                                                    <CardTitle>
                                                        {child.action}
                                                    </CardTitle>
                                                    <Actions>
                                                        <CustomSelect options={child.options} label='' />
                                                        <CustomToggle />
                                                    </Actions>
                                                </CenterContent>
                                            </Child>
                                        )
                                    }
                                })
                            }
                        </ContentShow>
                    ) :  (
                        <Content>
                            {
                                (children && children).map((child, index) => {
                                    if (child.hasSelect === false) {
                                        return (
                                            <Child key={index}>
                                                <CenterContent>
                                                    <CardTitle>{child.action}</CardTitle>
                                                    <CustomToggle />
                                                </CenterContent>
                                            </Child>
                                        )
                                    } else {
                                        return (
                                            <Child key={index}>
                                                <CenterContent>
                                                    <CardTitle>
                                                        {child.action}
                                                    </CardTitle>
                                                    <Actions>
                                                        <CustomSelect options={child.options} label='' />
                                                        <CustomToggle />
                                                    </Actions>
                                                </CenterContent>
                                            </Child>
                                        )
                                    }
                                })
                            }
                        </Content>
                    )
                }
            </Item>
    )
};

export default CustomDropdown;


const Item = styled.div`
  min-height: 35px;
  height: fit-content;
  width: 315px;
  background-color: #272b34;
  padding: 30px 15px 10px 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  //justify-content: space-between;
  margin: 3px 0;
`;

const ItemContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Title = styled.div`
  font-size: 14px;
  color: #d8e3fa;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100px;
`;

// const TestContent = styled.div`
//   width: ${selected => !selected ? '0' : '300px'};
//   height: ${selected => !selected ? '0' : 'auto'};
//   max-height: ${selected => !selected ? '0' : '9999px'};
//   overflow: ${selected => !selected ? 'hidden' : ''};
//   width: ${selected => !selected ? '0' : '300px'};
//   padding: ${selected => !selected ? '10px 40px 10px 0' : '0'};
// `;

const Content = styled.div`
  height: 0;
  width: 0;
  max-height: 0;
  overflow: hidden;
  //transition: all 0.5s ease-in;
`;


const ContentShow = styled.div`
  height: auto;
  width: 300px;
  max-height: 9999px;
  //transition: all 0.5s ease-in;
  padding: 10px 40px 10px 0;
`;

const Caret = styled.div`
  width: 15px;
  height: 10px;
  z-index: 9999;
  margin: 0;
  
  &:hover {
    cursor: pointer;
  }
`;

const Drop = styled.img`
  width: 100%;
  height: 100%;
`;

const Child = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24262c;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 0;
`;

const CenterContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

`;

const CardTitle = styled.div`
  font-size: 12px;
  color: #d8e3fa;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;


const Actions = styled.div`
  display: flex;
  width: 160px;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;