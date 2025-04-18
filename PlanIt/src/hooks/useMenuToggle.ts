import { useState, useCallback } from "react";

interface UseMenuToggleReturn {
  showUserMenu: boolean;
  toggleUserMenu: () => void;
  closeUserMenu: () => void;
  showMoreMenu: boolean;
  toggleMoreMenu: () => void;
  closeMoreMenu: () => void;
}

const useMenuToggle = (): UseMenuToggleReturn => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const toggleUserMenu = useCallback(() => {
    setShowUserMenu((prev) => !prev);
    setShowMoreMenu(false);
  }, []);

  const closeUserMenu = useCallback(() => {
    setShowUserMenu(false);
  }, []);

  const toggleMoreMenu = useCallback(() => {
    setShowMoreMenu((prev) => !prev);
    setShowUserMenu(false);
  }, []);

  const closeMoreMenu = useCallback(() => {
    setShowMoreMenu(false);
  }, []);

  return {
    showUserMenu,
    toggleUserMenu,
    closeUserMenu,
    showMoreMenu,
    toggleMoreMenu,
    closeMoreMenu,
  };
};

export default useMenuToggle;
