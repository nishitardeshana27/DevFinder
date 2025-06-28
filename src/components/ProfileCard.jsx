function ProfileCard({ user }) {
  return (
    <div className="mt-6 w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-20 h-20 rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || 'No Name'}</h2>
          <p className="text-gray-500">@{user.login}</p>
        </div>
      </div>
      <p className="mt-4">{user.bio || 'No bio provided.'}</p>
      <div className="mt-4 grid grid-cols-3 text-center">
        <div>
          <p className="text-sm">Followers</p>
          <p className="font-semibold">{user.followers}</p>
        </div>
        <div>
          <p className="text-sm">Following</p>
          <p className="font-semibold">{user.following}</p>
        </div>
        <div>
          <p className="text-sm">Repos</p>
          <p className="font-semibold">{user.public_repos}</p>
        </div>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        className="block mt-4 text-blue-600 hover:underline text-center"
      >
        Visit GitHub Profile →
      </a>
    </div>
  );
}

export default ProfileCard;