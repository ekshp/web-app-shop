const useTelegram = () => {
  if (window.Telegram) {
    return window.Telegram.WebApp;
  }

  // Мок для режима разработки
  if (import.meta.env.DEV) {
    return {
      ready: () => console.log("Telegram WebApp ready (dev mode)"),
      expand: () => console.log("Telegram WebApp expand (dev mode)"),
      close: () => console.log("Telegram WebApp close (dev mode)"),
      MainButton: {
        text: "CONTINUE",
        color: "#2481cc",
        textColor: "#ffffff",
        isVisible: false,
        isProgressVisible: false,
        isActive: true,
        setText: (text: string) => console.log("MainButton setText:", text),
        onClick: (callback: () => void) =>
          console.log("MainButton onClick:", callback),
        offClick: (callback: () => void) =>
          console.log("MainButton offClick:", callback),
        show: () => console.log("MainButton show"),
        hide: () => console.log("MainButton hide"),
        enable: () => console.log("MainButton enable"),
        disable: () => console.log("MainButton disable"),
        showProgress: () => console.log("MainButton showProgress"),
        hideProgress: () => console.log("MainButton hideProgress")
      },
      initData: "",
      initDataUnsafe: {},
      version: "6.0",
      platform: "web",
      colorScheme: "light",
      themeParams: {},
      isExpanded: false,
      viewportHeight: window.innerHeight,
      viewportStableHeight: window.innerHeight,
      headerColor: "#ffffff",
      backgroundColor: "#ffffff"
    };
  }

  return null;
};
export default useTelegram;
