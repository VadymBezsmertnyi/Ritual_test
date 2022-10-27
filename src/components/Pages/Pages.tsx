import { Box, Divider, IconButton, Typography } from '@mui/material';

import { binIcon, plusIcon, pageIcon } from 'images';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPage,
  createTemplate,
  deletePage,
  deleteTemplate,
  fetchPages,
  fetchTemplate,
  selectPage,
  selectTemplate,
} from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { IInitialState } from 'types/main';

import useStyles from './Pages.styles';

interface IPagesProps {
  setType: (type: string) => void;
}

const Pages = ({ setType }: IPagesProps) => {
  const { pages, templates } = useSelector((state: IInitialState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchPages());
    dispatch(fetchTemplate());
  }, []);

  const deletePageClick = (id: string) => {
    dispatch(deletePage({ id }));
  };
  const deleteTemplateClick = (id: string) => {
    dispatch(deleteTemplate({ id }));
  };

  const addPageClick = () => {
    setType('page');
    dispatch(createPage());
  };
  const addTemplateClick = () => {
    setType('template');
    dispatch(createTemplate());
  };

  const selectItem = (type: string, id: number) => {
    setType(type);
    if (type === 'page') dispatch(selectPage(id));
    else dispatch(selectTemplate(id));
  };

  return (
    <Box className={classes.pagesContainer}>
      <Typography className={classes.titlePages}>ADD PAGE</Typography>
      <Divider orientation="horizontal" className={classes.linePages} />
      <Box onClick={addPageClick} className={classes.page}>
        <Box className={classes.pageLeft}>
          <Box className={classes.pageIconBox}>
            <Box component={'img'} src={pageIcon} />
          </Box>
          <Typography className={classes.addPageTitle}>Empty page</Typography>
        </Box>
      </Box>
      {pages.map((item, i) => (
        <Box key={`page_${i + 1}`} className={classes.page}>
          <Box
            onClick={() => selectItem('page', item.id)}
            className={classes.pageLeft}
          >
            <Box className={classes.pageIconBox}>
              <Box component={'img'} src={pageIcon} />
            </Box>
            <Typography className={classes.pageTitle}>{item.header}</Typography>
          </Box>

          <Box className={classes.pageRight}>
            <IconButton
              onClick={() => deletePageClick(String(item.id))}
              className={classes.buttonBinIcon}
            >
              <Box component={'img'} src={binIcon} />
            </IconButton>
          </Box>
        </Box>
      ))}
      {templates.map((item, i) => (
        <Box key={`templates_${i + 1}`} className={classes.page}>
          <Box
            onClick={() => selectItem('template', item.id)}
            className={classes.pageLeft}
          >
            <Box className={classes.pageIconBox}>
              <Box component={'img'} src={pageIcon} />
            </Box>
            <Typography className={classes.pageTitle}>{item.header}</Typography>
          </Box>

          <Box className={classes.pageRight}>
            <IconButton
              onClick={() => deleteTemplateClick(String(item.id))}
              className={classes.buttonBinIcon}
            >
              <Box component={'img'} src={binIcon} />
            </IconButton>
          </Box>
        </Box>
      ))}
      <Box onClick={addTemplateClick} className={classes.page}>
        <Box className={classes.pageLeft}>
          <Box className={classes.pageIconBox}>
            <Box component={'img'} src={plusIcon} />
          </Box>
          <Typography className={classes.addTemplateTitle}>
            New template
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Pages;
