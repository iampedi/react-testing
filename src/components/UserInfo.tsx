import { useAuth } from "../context/AuthContext";

export function UserInfo() {
  const { user, loading, error } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">Something went wrong</p>;
  if (!user) return <p>No user</p>;

  if (!user) return <p>No user</p>;
  return <p>Welcome, {user.name}</p>;
}
