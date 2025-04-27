// app/RootLayoutClient.jsx
'use client';

import "../assets/scss/theme.scss";
import 'react-circular-progressbar/dist/styles.css';
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import NavigationProvider from "@/contentApi/navigationProvider";
import SettingSideBarProvider from "@/contentApi/settingSideBarProvider";
import ThemeCustomizer from "@/components/shared/ThemeCustomizer";
import { Provider } from 'react-redux';
import { store } from '@/store/index';

export default function RootLayoutClient({ children }) {
  return (
    <Provider store={store}>
      <SettingSideBarProvider>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </SettingSideBarProvider>
      <ThemeCustomizer />
    </Provider>
  );
}
