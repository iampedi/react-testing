import { useAuth } from "../context/AuthContext";

export function UserInfo() {
  const { user } = useAuth();

  if (!user) return <p>No user</p>;
  return <p>Welcome, {user.name}</p>;
}
