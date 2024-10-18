// src/store/modalActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeLoginModal } from './store';

interface SetupOutsideClickListenerPayload {
  ref: React.RefObject<HTMLDivElement>;
  closeModalAction: () => void;
}

export const setupOutsideClickListener = createAsyncThunk(
  'modal/setupOutsideClickListener',
  async (payload: SetupOutsideClickListenerPayload, { dispatch }) => {
    const { ref, closeModalAction } = payload;

    const handleOutsideClick = (event: MouseEvent) => {
      if (ref && !ref.current?.contains(event.target as Node)) {
        dispatch(closeModalAction());
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }
);

export { closeLoginModal };
