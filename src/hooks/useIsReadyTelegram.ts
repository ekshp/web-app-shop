const useIsReadyTelegram = () => {
  if (window.Telegram) {
    return true;
  }

  if (import.meta.env.DEV) {
    return true;
  }

  return false;
};

export default useIsReadyTelegram;
