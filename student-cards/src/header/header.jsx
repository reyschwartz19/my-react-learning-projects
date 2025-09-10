import styles from './header.module.css'

const Header = ({filter = "Enrolled"}) =>{

    
    return(
        <nav>
            <p>My app</p>
            <button className={styles.btn}>{filter}</button>
        </nav>
    );
}


export default Header