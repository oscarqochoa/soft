
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
export default {
    methods: {
        convertProgramToModule(program) {
            let module = 0;
            if (program == 0) {
                module = 0;
              } else {
                switch (parseInt(this.program)) {
                  case 1:
                    module = 3;
                    break;
                  case 2:
                    module = 7;
                    break;
                  case 3:
                    module = 6;
                    break;
                  case 4:
                    module = 5;
                    break;
                  case 5:
                    module = 8;
                    break;
                  case 6:
                    module = 10;
                    break;
                }
              }
              return module;
        },
        createClass(name, rules) {
          var style = document.createElement("style");
          style.type = "text/css";
          document.getElementsByTagName("head")[0].appendChild(style);
          if (!(style.sheet || {}).insertRule)
            (style.styleSheet || style.sheet).addRule(name, rules);
          else style.sheet.insertRule(name + "{" + rules + "}", 0);
        },
        showToast(variant, position, title, icon, text) {
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title,
                icon,
                text,
                variant,
              },
            },
            {
              position,
            }
          );
        },
    }
};