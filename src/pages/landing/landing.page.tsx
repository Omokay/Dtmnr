import styled from "styled-components";
import General from "../../components/general_view/general_view.component";
import Settings from "../../components/settings_view/settings_view.component";

const Landing = () => {
    return (
        <Main>
            <InnerDiv>
                <General />
                <Settings/>
            </InnerDiv>
        </Main>
    )
};

export default Landing;

 const Main = styled.div`
   width: 100%;
   height: auto;
   min-height: 100vh;
   margin: 0;
   padding: 30px;
   background-color: #1e2128;
 `;


 const InnerDiv = styled.div`
    //width: 95%;
    max-width: 1200px;
    margin: 0 auto;
 `;
