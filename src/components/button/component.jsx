import classNames from 'classnames';
import styles from './styles.module.scss';
import { useCurrrentTheme} from '../contexts/theme';



export const Button = ({children, onClick, disabled, className}) => {

    const {theme} = useCurrrentTheme();

    return (
        <button onClick={ onClick } disabled={ disabled } className={classNames(styles.myButton, className, styles[theme])}>
            { children }
        </button>
    );
}