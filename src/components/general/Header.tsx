import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("header.title")}</h1>
    </div>
  );
}
