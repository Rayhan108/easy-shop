"use client";

// import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      {/* <AuthProvider></AuthProvider> */}
      {children}
    </ThemeProvider>
  );
};

export default Providers;