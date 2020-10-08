import { createContext, SetStateAction, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface ContextProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const IndicatorContext = createContext<ContextProps>({
    isOpen: false,
    setIsOpen:()=>false,
});

const IndicatorProvider: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <IndicatorContext.Provider
            value={{
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </IndicatorContext.Provider>
    );
};

export default IndicatorProvider;
