import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Input,
  Typography,
} from '@mui/material';
import TextToolbar from 'components/TextToolbar';
import { closeIcon } from 'images';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage, updateTemplate } from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { IInitialState } from 'types/main';

import useStyles from './Details.styles';

interface IDetailsProps {
  type: string;
  setType: (type: string) => void;
}

const Details = ({ type, setType }: IDetailsProps) => {
  const select = useSelector((state: IInitialState) => state.select);
  console.log(select);
  const dispatch = useDispatch<AppDispatch>();
  const [showMessageTemplate, setShowMessageTemplate] = useState(
    type === 'template'
  );
  const [selectHeader, setSelectHeader] = useState(false);
  const [textHeader, setTextHeader] = useState(select?.header || 'Untitled');
  const [text, setText] = useState(
    JSON.parse(JSON.stringify(select?.body)) || ''
  );

  const classes = useStyles();

  console.log(select);

  const save = () => {
    if (type === 'page')
      dispatch(
        updatePage({ id: String(select?.id), header: textHeader, body: text })
      );
    else
      dispatch(
        updateTemplate({
          id: String(select?.id),
          header: textHeader,
          body: text,
        })
      );
    setType('');
  };

  return (
    <Box className={classes.detailsContainer}>
      {showMessageTemplate && (
        <Box className={classes.template}>
          <Box className={classes.templateTitle}>
            <Typography>You’re editing a new template</Typography>
          </Box>
          <Box
            onClick={() => setShowMessageTemplate(false)}
            component={'img'}
            src={closeIcon}
            className={classes.templateCloseIcon}
          />
        </Box>
      )}
      <Box className={classes.header}>
        {selectHeader ? (
          <ClickAwayListener onClickAway={() => setSelectHeader(false)}>
            <Input
              onChange={(e) => setTextHeader(e.target.value)}
              value={textHeader}
              className={classes.headerTitle}
            />
          </ClickAwayListener>
        ) : (
          <Typography
            onClick={() => setSelectHeader(true)}
            className={classes.headerTitle}
          >
            {textHeader}
          </Typography>
        )}
        <Divider orientation="horizontal" className={classes.lineHeader} />
      </Box>
      <TextToolbar setValue={setText} value={text} />
      <Button onClick={save}>Save</Button>
    </Box>
  );
};

export default Details;
