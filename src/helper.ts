export const isTokenExpired = (expireDate: string): boolean => {
  const expiryTime = new Date(expireDate).getTime();
  const currentTime = Date.now();
  return currentTime >= expiryTime;
};
