import styled from 'styled-components';
import CustomToggle from "../custom_toggle/custom_toggle.component";
import CustomSelect from "../react_select/react_select.component";

interface AlertProps {
    alertOptions: any,
}


const AlertColumn = ({alertOptions}: AlertProps) => {
    // console.log(alertOptions);
    return (
         <>
                <Header>
                    Alerts
                </Header>
                <AlertCard>
                    {/* Alert Listings */}
                    {
                        (alertOptions && alertOptions).map((alert) => {
                            if (alert.hasSelect === false) {
                                return (
                                    <Alert key={alert.id}>
                                        <CenterContent>
                                            <CardTitle>{alert.item}</CardTitle>
                                            <CustomToggle />
                                        </CenterContent>
                                    </Alert>
                                )
                            } else {
                                return (
                                    <Alert key={alert.id}>
                                        <CenterContent>
                                            <CardTitle>
                                                {alert.item}
                                            </CardTitle>
                                            <Action>
                                                <CustomSelect options={alert.selectOptions} label='' />
                                                <CustomToggle />
                                            </Action>
                                        </CenterContent>
                                    </Alert>
                                )
                            }
                        })
                    }
                </AlertCard>
            </>

    )
}

export default AlertColumn;

const Header = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #d8e3fa;
  margin: 20px 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const AlertCard = styled.div`
  width: 340px;
  height: auto;
  padding: 10px 10px 10px 20px;
  margin: 10px 15px 10px 0;
  border-radius: 8px;
  background-color: #272b34;
`;

export const Alert= styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272b34;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 0;
`;

export const CenterContent = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;

`;

export const CardTitle = styled.div`
  font-size: 13px;
  color: #d8e3fa;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;


export const Action = styled.div`
  display: flex;
  width: 160px;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;