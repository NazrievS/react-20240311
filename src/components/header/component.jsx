import classNames from "classnames";
import styles from './styles.module.scss'
import { ThemeContext, useCurrrentTheme } from "../contexts/theme";
import { Button } from "../button/component";
import { useMemo } from "react";
import { UserButton} from "../user-button/component";

export const Header = ({className}) => {
   
    const { toggleTheme } = useCurrrentTheme();

    const headerTheme = useMemo(() => ({theme: "default"}, []));

   return (
        <div className={classNames(styles.root, className)}>
            <header className={styles.textSize}>
                <ThemeContext.Provider value={headerTheme}>
                    Header
                    <Button onClick={toggleTheme}>ToggleTheme</Button>
                </ThemeContext.Provider>
                <UserButton/>
            </header>
        </div>
    )
}