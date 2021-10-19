import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries';

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  // const [deleteUser] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
              {/* <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button> */}
            </div>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
