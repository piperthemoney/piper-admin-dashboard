import { useSnackbar } from "notistack";

// Custom hook to use Snackbar
export const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notify = (message, variant = "default") => {
    enqueueSnackbar(message, { variant });
  };

  return { notify };
};
