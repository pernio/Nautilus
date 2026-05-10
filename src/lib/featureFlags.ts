const DEV_MODE_STORAGE_KEY = "nautilus-dev-mode";
const ADVANCED_MODE_STORAGE_KEY = "nautilus-advanced-mode";

function readStoredDevMode(): boolean {
  return window.localStorage.getItem(DEV_MODE_STORAGE_KEY) === "true";
}

function readStoredAdvancedMode(): boolean {
  return window.localStorage.getItem(ADVANCED_MODE_STORAGE_KEY) === "true";
}

export function syncFeatureFlagAttributes() {
  document.documentElement.dataset.dev = readStoredDevMode() ? "true" : "false";
  document.documentElement.dataset.advanced = readStoredAdvancedMode() ? "true" : "false";
}

export function isDevModeEnabled() {
  return readStoredDevMode();
}

export function isAdvancedModeEnabled() {
  return readStoredAdvancedMode();
}

export function setDevModeEnabled(enabled: boolean) {
  window.localStorage.setItem(DEV_MODE_STORAGE_KEY, enabled ? "true" : "false");
  syncFeatureFlagAttributes();
}

export function setAdvancedModeEnabled(enabled: boolean) {
  window.localStorage.setItem(ADVANCED_MODE_STORAGE_KEY, enabled ? "true" : "false");
  syncFeatureFlagAttributes();
}
