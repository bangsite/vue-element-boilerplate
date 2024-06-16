import { reactive, toRefs } from "vue";

export default function checkFiles() {
  const state = reactive({
    errorMessageKey: "",
  });

  const checkFileExtension = (accept: string, fileName: string) => {
    switch (accept) {
      case "text/css":
        state.errorMessageKey = fileName === "text/css" ? "" : "NOTIFICATION.CSS_TYPE";
        break;
      case "text/csv":
        state.errorMessageKey = fileName === "text/csv" ? "" : "NOTIFICATION.CSV_TYPE";
        break;
      default:
        state.errorMessageKey = ["image/jpg", "image/png", "image/jpeg"].includes(fileName)
          ? ""
          : "NOTIFICATION.FILE_IMG_TYPE";
        break;
    }
  };

  const checkFileSize = (fileSize: string | number, limitSize: number = 5) => {
    return parseInt(<string>fileSize) / 1024 / 1024 <= limitSize;
  };

  const checkFileLimit = (fileList: string | any[], limitFile: number = 10) => {
    if (fileList && fileList.length) return fileList.length < limitFile;
  };

  return {
    ...toRefs(state),
    checkFileExtension,
    checkFileSize,
    checkFileLimit,
  };
}
