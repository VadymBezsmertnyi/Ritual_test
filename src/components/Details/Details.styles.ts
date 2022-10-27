import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    width: '100%',
    height: '100vh',
  },
  template: {
    display: 'flex',
    alignItems: 'center',
    height: '51px',
    background: theme.palette.custom?.main.selectLavenderWeb,
  },
  templateTitle: {
    width: '95%',
    textAlign: 'center',
    color: theme.palette.common.black,
    lineHeight: '37px',
  },
  templateCloseIcon: {},
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerTitle: {
    fontFamily: 'Times',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '37px',
    textAlign: 'center',
    color: theme.palette.custom?.main.fontNewGray,
    padding: '23px 0 7px 0',
  },
  lineHeader: {
    width: '100%',
    height: '1px',
    background: theme.palette.custom?.main.lineAntiFlashWhite,
  },
}));

export default useStyles;
