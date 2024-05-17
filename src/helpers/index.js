import Swal from "sweetalert2";


/* TOASTS */
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const toastTrigger = (state, msg) => {
  state === "error"
    ? Toast.fire({
        icon: state,
        title: msg,
      })
    : Toast.fire({
        icon: state,
        title: msg,
      });
};
