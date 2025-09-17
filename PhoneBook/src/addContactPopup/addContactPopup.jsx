import styles from './addContactPopup.module.css';

const AddContactPopup = () => {

  return(
    <div className={styles.popup}>
        <input placeholder='Name' type='text'/>
        <input placeholder='Phone' type='number'/>
        <button>Save</button>
    </div>
  );

}

export default AddContactPopup;