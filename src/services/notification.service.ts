import type { AxiosError, AxiosResponse } from "axios";
import { HttpStatusCode } from "axios";

import { ElNotification } from "element-plus";
import { i18n } from "@/plugins/vue-i18n";
import { ExceptionKeys } from "@/enums/exception";

class NotificationService {
    public static showError(error: Error | AxiosError) {
        let status = (error as AxiosError)?.response?.status || 0;
        let message = error.message;

        if ((error as AxiosError)?.response?.data) {
            const data = (error as AxiosError).response.data as any;
            status = data.status || status;
            message = data.message || message;
        }

        const titleKey = this.getErrorTitleKey(status);
        const messageKey = this.getErrorMessageKey(status, message);


        ElNotification({
            type: "error",
            title: i18n.global.t(titleKey),
            message: messageKey ? i18n.global.t(messageKey) : message,
        });
    }

    public static showSuccess(response: AxiosResponse) {
        const status = response.status;
        const titleKey = ExceptionKeys.SUCCESS_TITLE;
        const messageKey = ExceptionKeys.SUCCESS_DESC;

        if (status === HttpStatusCode.Ok || status === HttpStatusCode.Created) {
            ElNotification({
                type: "success",
                title: i18n.global.t(EXCEPTION_MESSAGES[titleKey]),
                message: i18n.global.t(EXCEPTION_MESSAGES[messageKey]),
            });
        }
    }

    private static getErrorTitleKey(status: number): string {
        switch (status) {
            case 0:
                return ExceptionKeys.LOCAL_NETWORK_ERROR;
            case HttpStatusCode.InternalServerError:
                return ExceptionKeys.INTERNAL_SERVER_ERROR;
            case HttpStatusCode.Unauthorized:
                return ExceptionKeys.UNAUTHORIZED_ERROR;
            case HttpStatusCode.Forbidden:
                return ExceptionKeys.FORBIDDEN_ERROR;
            case HttpStatusCode.NotFound:
                return ExceptionKeys.NOT_FOUND_ERROR;
            case HttpStatusCode.BadRequest:
                return ExceptionKeys.VALIDATION_ERROR;
            default:
                return `Error ${status}`;
        }
    }

    private static getErrorMessageKey(status: number, defaultMessage: string): string {
        switch (status) {
            case 0:
                return ExceptionKeys.LOCAL_NETWORK_ERROR;
            case HttpStatusCode.InternalServerError:
                return ExceptionKeys.INTERNAL_SERVER_ERROR;
            case HttpStatusCode.Unauthorized:
                return ExceptionKeys.UNAUTHORIZED_ERROR;
            case HttpStatusCode.Forbidden:
                return ExceptionKeys.FORBIDDEN_ERROR;
            case HttpStatusCode.NotFound:
                return ExceptionKeys.NOT_FOUND_ERROR;
            case HttpStatusCode.BadRequest:
                return ExceptionKeys.VALIDATION_ERROR;
            default:
                return defaultMessage;
        }
    }
}

export { NotificationService };
