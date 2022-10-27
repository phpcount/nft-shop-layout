export const ASSETS_PATH: string = '/assets';

export function getUrlByPath(path: string): string {
  return (new URL(
    path,
    import.meta.url
  )).toString();
}

export function getAssetsUrl(path: string): string {
  return getUrlByPath(`${ASSETS_PATH}/${path}`);
}


export function getLogoPath(name: string, format: null|string = null): string {
  if (format) {
    name += '.' + format;
  }
  return `${ASSETS_PATH}/logo/${name}`;
}

export function getUserAvatarUrl(name: undefined|string): string {
  if (!name) return '';
  return getUrlByPath(getLogoPath(`user/${name}`));
}

export function getArticleImgUrl(name: string): string {
  return getUrlByPath(`${ASSETS_PATH}/img/articles/${name}`);
}
