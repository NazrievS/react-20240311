import classNames from 'classnames';
import styles from './styles.module.scss';
import { useCurrentUser } from '../contexts/user';

export const Footer = ({className}) => {

const {user} = useCurrentUser();

    return <footer className={classNames(styles.root, className)}>Footer{user}</footer>
}