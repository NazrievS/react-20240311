import classNames from 'classnames'
import styles from './styles.module.scss'
import { Header } from '../header/component'
import { Footer } from '../footer/component'

export const Layout = ({children, className}) => {
    return (
        <div className={className}>
            
            <Header className={styles.headerPadding}/>
            <div className= {styles.content}>{children}</div>
            <Footer className={styles.footerText} />
            
        </div>
    )
}