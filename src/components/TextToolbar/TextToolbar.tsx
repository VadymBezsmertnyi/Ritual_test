import { Box } from '@mui/material';
import MUIRichTextEditor from 'mui-rte';

import useStyles from './TextToolbar.styles';

interface ITextToolbarProps {
  value: string;
  setValue: (value: string) => void;
}

const TextToolbar = ({ value, setValue }: ITextToolbarProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.containerTextToolbar}>
      <MUIRichTextEditor
        label="Question Description"
        value={value}
        onSave={setValue}
      />
    </Box>
  );
};

export default TextToolbar;
