import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full p-5 px-7 border-b border-gray-200 flex flex-row gap-x-4">
      <h1 className="font-semibold">Nautilus</h1>
      <div className="w-full" />
      <p>{t("header.title")}</p>
    </div>
  );
}
