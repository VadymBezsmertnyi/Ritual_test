import { Box, Divider, IconButton, Typography } from '@mui/material';

import { noteIcon, binIcon, plusIcon } from 'images';

import useStyles from './Notes.styles';

const Notes = () => {
  const tempArray = Array.from(Array(3).keys());
  const classes = useStyles();

  return (
    <Box className={classes.notesContainer}>
      <Typography className={classes.titleNotes}>session notes</Typography>
      <Divider orientation="horizontal" className={classes.lineNotes} />
      {tempArray.map((_item, i) => (
        <Box className={classes.note}>
          <Box className={classes.noteLeft}>
            <Box className={classes.noteIconBox}>
              <Box component={'img'} src={noteIcon} />
            </Box>
            <Typography className={classes.noteTitle}>
              Session {i + 1}
            </Typography>
          </Box>

          <Box className={classes.noteRight}>
            <Typography className={classes.noteDate}>Jan 21</Typography>
            <IconButton className={classes.buttonBinIcon}>
              <Box component={'img'} src={binIcon} />
            </IconButton>
          </Box>
        </Box>
      ))}
      <Box className={classes.note}>
        <Box className={classes.noteLeft}>
          <Box className={classes.noteIconBox}>
            <Box component={'img'} src={plusIcon} />
          </Box>
          <Typography className={classes.addNoteTitle}>Add page</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Notes;
