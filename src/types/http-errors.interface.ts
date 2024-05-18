interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}
interface BadRequestError extends Problem {}
// error 403
interface UnauthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface unhandledException extends Problem {}
interface NetworkError extends Problem {}
type ApiError =
  | BadRequestError
  | NetworkError
  | unhandledException
  | UnauthorizedError
  | NotFoundError
  | ValidationError;

export type {
  unhandledException,
  NotFoundError,
  ValidationError,
  BadRequestError,
  UnauthorizedError,
  Problem,
  NetworkError,
  ApiError,
};
