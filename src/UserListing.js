import React, { useState, useTransition } from "react";
import Spinner from "./Spinner";
import "./UserListing.css";

const UserListing = (props) => {
  const userDetails = [
    {
      id: 1,
      first: "Mark",
      last: "Otto",
      handle: "@m_otto"
    },
    {
      id: 2,
      first: "Elon",
      last: "Musk",
      handle: "@m_elon"
    },
    {
      id: 3,
      first: "John",
      last: "Smith",
      handle: "@s_john"
    }
  ];

  const [users, setUsers] = useState(userDetails);
  const [isUserFilterPending, startTransition] = useTransition();

  const filterUsers = (e) => {
    startTransition(() => {
      console.log("running transition");
      setUsers(
        userDetails.filter(
          (x) =>
            x.first.toLowerCase().startsWith(e.target.value) ||
            x.last.toLowerCase().startsWith(e.target.value)
        )
      );
    });
  };

  return (
    <>
      <h1>Users in Contoso Inc., </h1>

      <div>
        <input
          type="text"
          placeholder="Enter a name to filter"
          onChange={filterUsers}
        />
      </div>

      {isUserFilterPending && <Spinner />}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.first}</td>
                  <td>{user.last}</td>
                  <td>{user.handle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserListing;
