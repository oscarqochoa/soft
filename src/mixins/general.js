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
        }
    }
};