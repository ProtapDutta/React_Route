export function getUsers() {
  const stored = localStorage.getItem("users");
  return stored ? JSON.parse(stored) : [];
}
export function setUsers(users: any[]) {
  localStorage.setItem("users", JSON.stringify(users));
}