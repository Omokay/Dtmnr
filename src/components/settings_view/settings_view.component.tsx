import styled from 'styled-components';
import CustomToggle from "../custom_toggle/custom_toggle.component";
import AlertColumn from '../alert_view/alert.component';
import SettingsAlert from "../../constants/view_data/settings_alert/settings_alert";
import CustomDropdown from "../custom_dropdown/custom_dropdown.component";

const Settings = () => {
    // Destructure properties in SettingsAlert object
    const {settings1, settings2, alerts} = SettingsAlert;

    return (
        <Container>
           {/* Row with Settings and Alert Cards*/}
           <CardRow>
               {/*Settings First Column*/}zx
               <Column>
                   <Header>
                       Settings
                   </Header>
                   <Card>
                   {
                       (settings1 && settings1).map((setting1, index) => {
                            if (setting1.hadDropdown === false) {
                                return (
                                    <ToggleCard key={index}>
                                        <CenterContent>
                                            <CardTitle>{setting1.item}</CardTitle>
                                            <CustomToggle />
                                        </CenterContent>
                                    </ToggleCard>
                                )
                            } else {
                                return (
                                    // <GroupToggler key={setting1.id} isCollapsed={false} setValue={setCollapsed}/>
                                    <CustomDropdown key={index} index={index} item={setting1.item} children={setting1.children}/>
                                )
                            }
                       }
                       )
                   }
                   </Card>
               </Column>

               {/*Settings Second Column*/}
               <Column>
                   <Header>
                       Settings
                   </Header>
                   <Card>
                       {
                           (settings2 && settings2).map((setting2, index) => {
                                   if (setting2.hadDropdown === false) {
                                       return (
                                           <ToggleCard key={index}>
                                               <CenterContent>
                                                   <CardTitle>{setting2.item}</CardTitle>
                                                   <CustomToggle />
                                               </CenterContent>
                                           </ToggleCard>
                                       )
                                   } else {
                                       return (
                                          <CustomDropdown key={index} index={index} item={setting2.item} children={setting2.children} />
                                       )
                                   }
                               }
                           )
                       }
                   </Card>
               </Column>

               {/*Alerts Third Column */}
               <Column>
                   <AlertColumn alertOptions={alerts}/>
               </Column>
           </CardRow>
        </Container>
    )
}

export default Settings;

const Container = styled.div`
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

const Card = styled.div`
  width: 360px;
  height: fit-content;
  padding: 3px;
  margin: 10px 15px 10px 0;
  border-radius: 8px;
  background-color: #373a42;
  display: flex;
  flex-direction: column;
`;

const CardRow =  styled.div`
  width: 100%;
  display: flex;
  //justify-content: space-between;
  //align-items: center;
   flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const ToggleCard = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272b34;
  border-radius: 8px;
  margin-bottom: 2px;
  padding: 0;
`;

const CenterContent = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-size: 12px;
  color: #d8e3fa;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;