function Feed(props) {
  return (
    <div className="full-container">
      <div className="individual-container">
        <h1>{props.usernameinfo} </h1>
        <p>{props.contentinfo}</p>
        <div className="like">
          <img src={props.liconinfo} alt="licon" />
          <p>{props.likesinfo} </p>
        </div>
        <p>{props.timestampinfo} </p>
      </div>
    </div>
  );
}

export default Feed;
