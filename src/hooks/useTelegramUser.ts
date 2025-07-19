import qs from "query-string";

interface TGUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}
export interface TypeTGWebAppData {
  auth_date: string;
  hash: string;
  query_id: string;
  user: TGUser;
}
const useTelegramUser = () => {
  // Режим разработки - если нет Telegram данных, возвращаем тестового пользователя
  if (import.meta.env.DEV) {
    try {
      const { tgWebAppData } = JSON.parse(
        sessionStorage.getItem("__telegram__initParams") || "{}"
      );
      if (!tgWebAppData) {
        // Возвращаем тестового пользователя для разработки
        return {
          id: 123456789,
          first_name: "Test",
          last_name: "User",
          username: "testuser",
          language_code: "en"
        };
      }
      const TGparse = qs.parse(tgWebAppData);
      if (TGparse.user && typeof TGparse.user === "string") {
        const user: TGUser = JSON.parse(TGparse.user);
        return user;
      }
      return {
        id: 123456789,
        first_name: "Test",
        last_name: "User",
        username: "testuser",
        language_code: "en"
      };
    } catch {
      // В режиме разработки возвращаем тестового пользователя
      return {
        id: 123456789,
        first_name: "Test",
        last_name: "User",
        username: "testuser",
        language_code: "en"
      };
    }
  }

  // Продакшн режим - строгая проверка Telegram
  try {
    const { tgWebAppData } = JSON.parse(
      sessionStorage.getItem("__telegram__initParams") || ""
    );
    const TGparse = qs.parse(tgWebAppData);
    if (TGparse.user && typeof TGparse.user === "string") {
      const user: TGUser = JSON.parse(TGparse.user);
      return user;
    }
    return null;
  } catch {
    return null;
  }
};
export default useTelegramUser;
