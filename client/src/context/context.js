import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [like, setLike] = useState(0);

    const likeCount = () => {
        setLike((prevState) => {
            return prevState + 1;
        });
    };

    return (
        <AppContext.Provider value={{
            like,
            setLike,
            likeCount,
        }}>
            {children}
        </AppContext.Provider>
    );
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }