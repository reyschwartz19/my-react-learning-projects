import styles from './StudentCard.module.css'
import PropTypes from 'prop-types';
const StudentCard = ({age = 0, name = "guest", isEnrolled = false }) =>{
    let enrolled;
    isEnrolled ? enrolled = "yes" : enrolled = "no";
   
    return(
        <div className={styles.card}>
            <p>Age: {age} </p>
            <p>Name: {name}</p>
            <p>Enrolled: {enrolled}</p>
        </div>
    );
}

StudentCard.prototypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    isEnrolled: PropTypes.bool,
}
export default StudentCard