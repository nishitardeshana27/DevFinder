import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import Error from './components/Error';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.status === 404) throw new Error("GitHub user not found.");
      const data = await res.json();
      setUser(data);
      setError(null);
    } catch (err) {
      setUser(null);
      setError(err?.message || "Something went wrong.");
      } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold my-6">💻  DevFinder</h1>
      <SearchBar onSearch={fetchUser} />
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <Error message={error} />}
      {user && <ProfileCard user={user} />}
    </div>
  );
}

export default App;
