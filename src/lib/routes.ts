export const ROUTES = {
  home: "home",
  manuscript: "manuscript",
  settings: "settings",
  dev: "dev",
} as const;

export type RouteId = (typeof ROUTES)[keyof typeof ROUTES];

const DEFAULT_ROUTE: RouteId = ROUTES.home;

function isRouteId(value: string): value is RouteId {
  return Object.values(ROUTES).includes(value as RouteId);
}

export function getRouteFromHash(hash: string): RouteId {
  const normalizedHash = hash.replace(/^#/, "");
  return isRouteId(normalizedHash) ? normalizedHash : DEFAULT_ROUTE;
}

export function getCurrentRoute(): RouteId {
  return getRouteFromHash(window.location.hash);
}

export function navigateToRoute(route: RouteId) {
  const nextHash = `#${route}`;

  if (window.location.hash === nextHash) {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    return;
  }

  window.location.hash = nextHash;
}
