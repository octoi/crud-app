import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutation';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, { error }] = useMutation(CREATE_USER);
  return (
    <div className='createUser'>
      <input
        type='text'
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type='text'
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type='text'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        onClick={() => {
          createUser({
            variables: {
              name: name,
              username: username,
              password: password,
            },
          });
        }}
      >
        Create User
      </button>
    </div>
  );
}
