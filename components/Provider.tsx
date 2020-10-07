import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../styles/theme";

interface Props {
    children: React.ReactNode;
}

export default ({ children }: Props) => {
    const { value } = useDarkMode(false, {
        storageKey: undefined,
        onChange: undefined,
    });
    const theme = value ? darkTheme : lightTheme;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
