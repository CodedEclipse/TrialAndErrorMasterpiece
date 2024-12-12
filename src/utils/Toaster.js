import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toaster(message) {
  return toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export default Toaster;