import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import Toast from "bootstrap/js/dist/toast";
import Popover from "bootstrap/js/dist/popover";

export default defineNuxtPlugin(() => {
  class Bootstrap {
    showToast (id: string) {
      const toast = new Toast(id);
      toast.show();
    }

    initPopover () {
      const popoverTriggerList = document.querySelectorAll("[data-bs-toggle=\"popover\"]");
      [...popoverTriggerList].forEach(popoverTriggerEl => new Popover(popoverTriggerEl));
    }

    disposePopover () {
      const popoverTriggerList = document.querySelectorAll("[data-bs-toggle=\"popover\"]");
      [...popoverTriggerList].forEach((popoverTriggerEl) => {
        const popover = Popover.getInstance(popoverTriggerEl);
        if (popover) {
          popover.dispose();
        }
      });
    }
  }

  const bootstrap = new Bootstrap();

  return {
    provide: { bootstrap }
  };
});
