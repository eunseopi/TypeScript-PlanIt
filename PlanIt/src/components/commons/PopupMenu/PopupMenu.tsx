import { useEffect, useRef } from "react";
import styled from "styled-components";
import type { MenuItem } from "../../../constants/menus";

interface User {
  id: string;
  name: string;
  profileImage: string;
}

interface ActionHandlers {
  onEdit?: () => void;
  onDelete?: () => void;
}

interface PopupMenuProps {
  isVisible: boolean;
  items: MenuItem[];
  onClose: () => void;
  user?: User;
  actionHandlers?: ActionHandlers;
}

const PopupMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MenuItemButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const PopupMenu = ({
  isVisible,
  items,
  onClose,
  user,
  actionHandlers,
}: PopupMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const handleItemClick = (action: string) => {
    switch (action) {
      case "edit":
        actionHandlers?.onEdit?.();
        break;
      case "delete":
        actionHandlers?.onDelete?.();
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <PopupMenuContainer ref={menuRef}>
      {items.map((item) => (
        <MenuItemButton
          key={item.id}
          onClick={() => handleItemClick(item.action)}
        >
          {item.label}
        </MenuItemButton>
      ))}
    </PopupMenuContainer>
  );
};

export default PopupMenu;
