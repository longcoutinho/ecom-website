import "@/styles/globals.css";
import "@/styles/Home.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "../redux/store";
import ThemeProvider from "@/theme";
import { PersistGate } from "redux-persist/integration/react";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { CollapseDrawerProvider } from "@/contexts/CollapseDrawerContext";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { getSettings } from "../utils/settings";
import cookie from "cookie";
import NotistackProvider from "@/components/NotistackProvider";
import { MotionLazyContainer } from "@/components/animate";
import ThemeColorPresets from "../components/ThemeColorPresets";
import RtlLayout from "@/components/RtlLayout";
import { ChartStyle } from "@/components/chart";
import Settings from "@/components/settings";
import ProgressBar from "@/components/ProgressBar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
          <CollapseDrawerProvider>
            <SettingsProvider >
              <ThemeProvider>
                <NotistackProvider>
                  <MotionLazyContainer>
                      <RtlLayout>
                        <Component {...pageProps} />
                      </RtlLayout>
                  </MotionLazyContainer>
                </NotistackProvider>
              </ThemeProvider>
            </SettingsProvider>
          </CollapseDrawerProvider>
    </ReduxProvider>
  );
}
