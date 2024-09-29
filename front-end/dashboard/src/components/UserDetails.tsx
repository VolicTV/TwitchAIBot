import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

interface UserDetails {
  id: string;
  discordUsername: string;
  twitchChannels: string[];
}

interface UserDetailsProps {
  userId: string | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (userId) {
        try {
          const response = await axios.get(`/api/users/${userId}`);
          setUserDetails(response.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      } else {
        setUserDetails(null);
      }
    };
    fetchUserDetails();
  }, [userId]);

  if (!userDetails) {
    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Select a user to view details</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        User Details: {userDetails.discordUsername}
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Discord Username" secondary={userDetails.discordUsername} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Twitch Channels"
            secondary={
              <List>
                {userDetails.twitchChannels.map((channel, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={channel} />
                  </ListItem>
                ))}
              </List>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default UserDetails;
