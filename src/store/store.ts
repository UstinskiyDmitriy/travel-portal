// src/store/modalSlice.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setupOutsideClickListener } from './ModalAction';

export interface ModalState {
  isRegisterOpen: boolean;
  isLoginOpen: boolean;
  outsideClickListenerCleanup?: () => void;
}

const initialState: ModalState = {
  isRegisterOpen: false,
  isLoginOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openRegisterModal: (state) => {
      state.isRegisterOpen = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterOpen = false;
    },
    openLoginModal: (state) => {
      state.isLoginOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setupOutsideClickListener.fulfilled, (state, action: PayloadAction<() => void>) => {
      state.outsideClickListenerCleanup = action.payload;
    });
  },
});

export const { openRegisterModal, closeRegisterModal, openLoginModal, closeLoginModal } = modalSlice.actions;

export default modalSlice.reducer;


export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>