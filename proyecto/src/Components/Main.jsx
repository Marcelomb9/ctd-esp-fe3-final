import styles from "../styles/Main.module.css";

export const Main = (props) => {
  
  return (
    
            <>
            <main 
            className={styles.main}>
              {props.children}
                </main>;
            </>
      ) 
    };
    export default Main;
  