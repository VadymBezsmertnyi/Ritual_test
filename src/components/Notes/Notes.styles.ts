import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  notesContainer: {
    width: '434px',
    minHeight: '323px',
    background: theme.palette.custom?.main.backgroundCulturedWhite,
    border: `1px solid ${theme.palette.custom?.main.borderLightGray}`,
    boxShadow: '0px 10px 19px #0000001a',
    borderRadius: '4px',
  },
  titleNotes: {
    padding: '24px 0 14px 45px',
    textTransform: 'uppercase',
    color: theme.palette.custom?.main.fontRomanSilver,
    fontWeight: 600,
    lineHeight: '19px',
  },
  lineNotes: {
    width: '100%',
    height: '1px',
    background: theme.palette.custom?.main.selectLavenderWeb,
  },
  note: {
    width: '100%',
    padding: '15px 29px 11px 19px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:hover': {
      background: theme.palette.custom?.main.selectLavenderWeb,
    },
  },

  noteLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  noteIconBox: {
    width: '38px',
    height: '38px',
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.custom?.main.iconBorderSilverMetallic}`,
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteTitle: {
    fontFamily: 'Inter-medium',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '22px',
    color: theme.palette.custom?.main.fontEerieBlack,
    marginLeft: '32px',
  },

  noteRight: {
    display: 'flex',
    alignItems: 'center',
  },
  noteDate: {
    color: theme.palette.custom?.main.fontRomanSilver,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'right',
  },
  buttonBinIcon: {
    padding: 0,
    marginLeft: '32px',
  },
  addNoteTitle: {
    fontFamily: 'Inter-medium',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '22px',
    color: theme.palette.custom?.main.fontEerieBlack,
    textDecorationLine: 'underline',
    textUnderlinePosition: 'under',
    marginLeft: '32px',
  },
}));

export default useStyles;
