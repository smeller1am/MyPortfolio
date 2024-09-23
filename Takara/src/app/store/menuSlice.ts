import { ModalType } from '@/app/store/modalSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export enum MenuType {
  Burger,
  Menu,
  Closed,
}
export interface MenuState {
  isOpen: MenuType | null;
}

const initialState: MenuState = {
  isOpen: null,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state, { payload }: PayloadAction<MenuType>) => {
      state.isOpen = payload;
    },
    closeMenu: state => {
      state.isOpen = MenuType.Closed;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
