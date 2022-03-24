import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Account } from 'advisor-models';
import { Divider } from '@mui/material';
import retirementImg from '../assets/retirement.svg';
import jointAccountImg from '../assets/joint-account.svg';
import savingsImg from '../assets/savings.svg';
import weddingImg from '../assets/wedding.svg';

const imageMap: { [key: string]: string } = {
  retirement: retirementImg,
  jointAccount: jointAccountImg,
  savings: savingsImg,
  wedding: weddingImg,
};

interface AccountListProps {
  accounts: Array<Account>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function AccountList({ accounts, onClick }: AccountListProps) {
  return (
    <Box sx={{ p: 2, height: '100%', backgroundColor: 'background.paper' }}>
      <Typography variant="h6" component="h2" sx={{ fontSize: '1rem' }}>
        Accounts
      </Typography>
      {accounts.length === 0 && <Typography>Client has no accounts</Typography>}
      {accounts.length > 0 && (
        <List>
          {accounts.map((account, index) => {
            const { id, name, accountNumber, imageId } = account;
            return (
              <React.Fragment key={id}>
                <ListItem disablePadding>
                  <ListItemButton id={id} onClick={onClick}>
                    <ListItemAvatar>
                      <Avatar alt={name} src={imageMap[imageId]} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={name}
                      secondary={accountNumber}
                      sx={{}}
                    />
                  </ListItemButton>
                </ListItem>
                {index < accounts.length - 1 && <Divider component="li" />}
              </React.Fragment>
            );
          })}
        </List>
      )}
    </Box>
  );
}
