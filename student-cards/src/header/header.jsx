import styles from './header.module.css'


const Header = ({filter,toggleFilter}) =>{

   
    return(
        <nav>
            <p>My app</p>
            <button className={styles.btn} onClick={filter}>{toggleFilter}</button>
        </nav>
    );
}


export default Header