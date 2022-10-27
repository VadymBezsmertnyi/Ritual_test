import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { create } from 'jss';
import jssIncreaseSpecificity from 'jss-increase-specificity';

import { createAppTheme } from 'theme/theme';
import { MainPage } from 'pages';
import { CssBaseline } from '@mui/material';

const App = () => {
  const theme = createAppTheme();
  const jss = create({
    plugins: [...jssPreset().plugins, jssIncreaseSpecificity()],
  });
  const generateClassName = createGenerateClassName({
    productionPrefix: 'fetss-',
    disableGlobal: false,
    seed: 'ss',
  });

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <MainPage />
        </CssBaseline>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
