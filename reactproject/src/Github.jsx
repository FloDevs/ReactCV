import "./style/github.css";
function Github() {
  const user = {
    login: "github-john-doe",
    id: 19842736,
    avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4",
    html_url: "https://github.com/github-john-doe",
    name: "John Doe",
    bio: "As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.",
    public_repos: 1,
    followers: 16,
    following: 0,
    created_at: "2016-06-09T17:14:00Z",
    updated_at: "2023-11-23T19:48:23Z",
    url_repo: "https://api.github.com/users/github-john-doe/repos",
  };

  const formattedCreatedAt = new Date(user.created_at).toLocaleDateString();
  return (
    <div className="github-content">
      <h1>Github user</h1>
      <h2>{user.name}</h2>
      <img
        src={user.avatar_url}
        alt="Avatar de John Doe sur Github qui represente un chat bleu sans oreille avec un nez rouge et une clochette autour du cou"
      />

      <p>{user.bio}</p>
      <div className="information-github">
        <p>Abonnés : {user.followers}</p>
        <p>Abonnements : {user.following}</p>
        <p>
          Créé le :<time dateTime={user.created_at}>{formattedCreatedAt}</time>
        </p>
        <p>
          Modifié le :
          <time dateTime={user.updated_at}>
            {new Date(user.updated_at).toLocaleDateString()}
          </time>
        </p>
        <p>URL repositories : {user.url_repo}</p>
      </div>
    </div>
  );
}

export default Github;
