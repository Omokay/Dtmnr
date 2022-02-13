import styled from 'styled-components';
import CustomToggle from "../custom_toggle/custom_toggle.component";
import GeneralItem from '../../constants/view_data/general_items/general_item';

const General = () => {
    return (
        <Wrapper>
            <Header>GENERAL</Header>
            <CardRow>
                {
                    (GeneralItem && GeneralItem).map((general_items, index) => (
                        <ToggleCards key={general_items.id}>
                            <CardTitle>
                                {general_items.item}
                            </CardTitle>
                            <CustomToggle />
                        </ToggleCards>
                    ))
                }
            </CardRow>
        </Wrapper>
    )
};

export default General;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;
const Header = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #d8e3fa;
  margin: 20px 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

 const ToggleCards = styled.div`
   width: 300px;
   height: 50px;
   padding: 10px 20px 10px 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #282d36;
   border-radius: 8px;
   margin: 10px 15px 10px 0;
   box-shadow: -1px 2px 5px 0px rgba(30, 37, 48, 1);
 `;

 const CardTitle = styled.div`
  font-size: 12px;
  color: #d8e3fa;
  text-transform: uppercase;
  font-weight: bold;
`;

const CardRow =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: 1px;
`;