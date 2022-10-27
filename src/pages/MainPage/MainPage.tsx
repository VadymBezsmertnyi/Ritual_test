import { Box } from '@mui/material';
import { Details, Pages } from 'components';
import { useState } from 'react';

import useStyles from './MainPage.styles';

const MainPage = () => {
  const [type, setType] = useState('');
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      {!type && <Pages setType={setType} />}
      {type && <Details type={type} setType={setType} />}
    </Box>
  );
};

export default MainPage;
