import { useTranslation } from "react-i18next";

interface Props {
  sideBarOpen: boolean;
  toggleSideBar: () => void;
}

export default function Header({ sideBarOpen, toggleSideBar }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full p-5 px-7 border-b border-gray-200 flex flex-row gap-x-8">
      <button onClick={toggleSideBar} className="cursor-pointer">
        <span className="material-symbols-rounded icon">
          {sideBarOpen ? "close" : "menu"}
        </span>
      </button>
      <h1 className="font-semibold">Nautilus</h1>
      <div className="w-full" />
      <p>{t("header.title")}</p>
    </div>
  );
}
