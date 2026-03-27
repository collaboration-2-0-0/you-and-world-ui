import { FC, useEffect } from 'react';
import { MessagesMap } from '@constants/messages';
import {
  HttpResponseErrorCode,
  httpResponseErrorEnum,
  isHttpResponseError,
} from '@client/connection/errors';
import { app } from '@components/app/app.provider';
import { modalService } from '@services/modal.service';
import { useApiError } from '@hooks/useApiError';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { NotFound } from '@views/not.found/not.found';

const STATUS_TO_MESSAGES_MAP: Record<HttpResponseErrorCode, string> = {
  400: MessagesMap.BAD_REQUEST,
  401: MessagesMap.BAD_REQUEST, // MessagesMap.UNAUTHORIZED,
  403: MessagesMap.BAD_REQUEST, // MessagesMap.FORBIDDEN,
  404: 'Not found',
  409: 'Conflict',
  500: MessagesMap.SERVER_ERROR,
  503: MessagesMap.SERVER_ERROR,
};

const showError = (statusCode: HttpResponseErrorCode) =>
  modalService.showError(STATUS_TO_MESSAGES_MAP[statusCode]);

export const ErrorCatch: FC = () => {
  const apiError = useApiError();
  const { status, error: appError } = app.useStatus(['status', 'error']);
  const isReady = status === 'READY' || appError;
  const navigate = useNavigateTo();

  useEffect(() => {
    const error = apiError || appError;
    if (!error) {
      return;
    }

    let statusCode = httpResponseErrorEnum.InternalServerError;
    if (isHttpResponseError(error)) {
      statusCode = error.statusCode;
    }

    if (statusCode === httpResponseErrorEnum.NotFound) {
      return;
    }

    showError(statusCode);

    if (statusCode === httpResponseErrorEnum.Unauthorized) {
      navigate.toIndex();
    }
  }, [apiError, appError, navigate]);

  if (!isHttpResponseError(apiError)) return null;
  if (apiError.statusCode === httpResponseErrorEnum.NotFound && isReady) return <NotFound />;

  return null;
};
