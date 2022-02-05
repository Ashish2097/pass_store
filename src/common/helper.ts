/**
 *
 * @param cname Cookie name
 * @param cvalue Cookie value
 * @param exdays Expiry time in days (default 7 days)
 */

export function setCookie(
  cname: string,
  cvalue: string | null,
  exdays: number = 7
) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

/**
 *
 * @param cname Cookie name
 * @returns value of cookie if present
 */
export function getCookie(cname: string) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
