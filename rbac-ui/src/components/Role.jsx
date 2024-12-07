import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Role = () => {
  const [roles, setRoles] = useState([]);
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');

  const fetchRoles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/roles');
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const addRole = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/roles', {
        name,
        permissions: permissions.split(','),
      });
      fetchRoles();
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div>
      <h2>Role Management</h2>
      <form onSubmit={addRole}>
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Permissions (comma-separated)"
          value={permissions}
          onChange={(e) => setPermissions(e.target.value)}
        />
        <button type="submit">Add Role</button>
      </form>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Role;
