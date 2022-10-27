import { Box } from '@mui/material';
import MUIRichTextEditor from 'mui-rte';
import { useState } from 'react';

import useStyles from './TextToolbar.styles';

interface ITextToolbarProps {
  value: string;
  setValue: (value: string) => void;
}

const TextToolbar = ({ value, setValue }: ITextToolbarProps) => {
  const [text, setText] = useState(value || '');
  const classes = useStyles();

  const save = (text: string) => {
    setText(text);
    setValue(text);
  };

  return (
    <Box className={classes.containerTextToolbar}>
      <MUIRichTextEditor
        label="Question Description"
        value={text}
        onSave={save}
      />
    </Box>
  );
};

export default TextToolbar;
