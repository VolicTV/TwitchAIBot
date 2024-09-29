import React, { useEffect, useState } from 'react';
import { List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import axios from 'axios';

interface User {
  id: string;
  discordUsername: string;
}

interface UserListProps {
  onSelectUser: (userId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Discord Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItemButton
            key={user.id}
            onClick={() => onSelectUser(user.id)}
          >
            <ListItemText primary={user.discordUsername} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default UserList;
