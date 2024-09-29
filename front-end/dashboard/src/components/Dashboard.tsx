import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import {Grid2 as Grid} from '@mui/material';
import UserList from './UserList';
import UserDetails from './UserDetails';

const Dashboard: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Twitch AI Bot Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid sx={{xs:12,  md:3}} component="div">
            <UserList onSelectUser={setSelectedUserId} />
          </Grid>
          <Grid sx={{xs:12,  md:8}} component="div">
            <UserDetails userId={selectedUserId} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
