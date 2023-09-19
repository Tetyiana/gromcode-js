export function parseUser(jsonString) {
  try {
    const user = JSON.parse(jsonString);
    return user;
  } catch (error) {
    return null;
  }
};