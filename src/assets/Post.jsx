// import posts from "./posts";

export default function Post(props) {
  return (
    <div className="full-container">
      <div className="individual-container">
        <h1>{props.usernameinfo} </h1>
        <p className="timestamp-info">{props.timestampinfo}</p>
        <p className="content-info">{props.contentinfo}</p>
        <div className="like">
          <img src={props.liconinfo} alt="like-iocon" />
          <p>{props.likesinfo} </p>
        </div>
      </div>
    </div>
  );
}
