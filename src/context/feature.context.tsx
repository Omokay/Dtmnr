import { createContext, useState } from 'react';
export const FeatureContext = createContext(null);

const FeatureContextProvider = ({ children }:any) => {
    const [isWalletModalOpen, setModalPane] = useState(false);

    return (
        <>
        </>
        //     <FeatureContext.Provider
        //         value={{
        //         }}
        //     >
        //         {children}
        //     </FeatureContext.Provider>
    )
}
// };

export default FeatureContextProvider;
