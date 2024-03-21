// import posts from "./posts";
import styles from "./Post.module.css";
export default function Post(props) {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.individualContainer}>
        <h1>{props.usernameinfo} </h1>
        <p className={styles.timestampInfo}>{props.timestampinfo}</p>
        <p className={styles.contentInfo}>{props.contentinfo}</p>
        <div className={styles.like}>
          <img src={props.liconinfo} alt="like-iocon" />
          <p>{props.likesinfo} </p>
        </div>
      </div>
    </div>
  );
}
