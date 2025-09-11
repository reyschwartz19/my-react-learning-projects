import styles from './StudentCard.module.css'
import PropTypes from 'prop-types';


const StudentCard = ({age = 0, name = "guest", isEnrolled = false }) =>{
    
    
    
    return(
        <div className={styles.card}>
            <p>Age: {age} </p>
            <p>Name: {name}</p>
            <p>Enrolled: { isEnrolled ?  "yes" :  "no"}</p>
        </div>
    );
}

StudentCard.prototypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    isEnrolled: PropTypes.bool,
}
export default StudentCard