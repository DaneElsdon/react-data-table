import { useState } from "react";

function UserTable({ users, search }) {

  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  // Handle user sort with ascending or decending
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Sort users in table
  const sortedUsers = [...users].sort((a, b) => {
    const valueA = a[sortField];
    const valueB = b[sortField];

    if (typeof valueA === "string") {
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return sortDirection === "asc"
      ? valueA - valueB
      : valueB - valueA;
  });

  // Highlight content in user data table when searching
  const highlightText = (text) => {
    if (!text) return "—";

    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");

    return text
      .toString()
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      );
  };

  return (

    <div className="table-responsive">

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
              # Id {sortField === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>

            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
              Name {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>

            <th onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>
              Email {sortField === "email" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>

            <th onClick={() => handleSort("role")} style={{ cursor: "pointer" }}>
              Role {sortField === "role" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
          </tr>
        </thead>

        <tbody>

          {sortedUsers.map((user) => (
            <tr key={user.id}>

              <td className="align-middle">
                {highlightText(user.id.toString())}
              </td>

              <td className="align-middle">
                {highlightText(user.name)}
              </td>

              <td className="align-middle">
                {highlightText(user.email)}
              </td>

              <td className="align-middle">
                <span
                  className={`badge rounded-pill w-100 text-center py-2 ${
                    user.role === "Admin"
                      ? "bg-danger-subtle text-secondary"
                      : user.role === "Editor"
                      ? "bg-warning-subtle text-secondary"
                      : user.role === "Viewer"
                      ? "bg-secondary-subtle text-secondary"
                      : "bg-primary-subtle text-secondary"
                  }`}
                >
                  {highlightText(user.role)}
                </span>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
      
    </div>

  )
}

export default UserTable