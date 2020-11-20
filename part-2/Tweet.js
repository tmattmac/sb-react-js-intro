const Tweet = ({ username, name, date, message }) => (
    <div>
        <b>{name}</b> <small>{username}</small> <br/>
        <i>{date}</i> <br/>
        {message}
    </div>
);