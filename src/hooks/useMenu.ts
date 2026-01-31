import { useState } from "react";

export default function useMenu() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [workspaceOpen, setWorkspaceOpen] = useState(true);
  const [chaptersOpen, setChaptersOpen] = useState(true);

  function toggleSideBar() {
    setSideBarOpen(!sideBarOpen);
  }

  function toggleWorkspace() {
    setWorkspaceOpen(!workspaceOpen);
  }
  function toggleChapters() {
    setChaptersOpen(!chaptersOpen);
  }

  return {
    sideBarOpen,
    workspaceOpen,
    chaptersOpen,
    toggleSideBar,
    toggleWorkspace,
    toggleChapters,
  };
}
