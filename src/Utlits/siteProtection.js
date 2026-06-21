const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://www.nexastudio.live";

const GOOGLE_SEARCH_URL = `https://www.google.com/search?q=${encodeURIComponent(
  SITE_URL
)}`;

const DEVTOOLS_SIZE_GAP = 160;

const blockedKeyCombos = new Set(["I", "J", "C"]);

const redirectToGoogle = () => {
  window.location.replace(GOOGLE_SEARCH_URL);
};

const isBlockedShortcut = (event) => {
  const key = event.key.toUpperCase();
  const usesMeta = event.metaKey || event.ctrlKey;

  if (key === "F12") {
    return true;
  }

  if (!usesMeta) {
    return false;
  }

  if (event.shiftKey && blockedKeyCombos.has(key)) {
    return true;
  }

  return key === "U";
};

const isDevToolsOpen = () => {
  if (window.innerWidth < 992) {
    return false;
  }

  const widthGap = window.outerWidth - window.innerWidth > DEVTOOLS_SIZE_GAP;
  const heightGap = window.outerHeight - window.innerHeight > DEVTOOLS_SIZE_GAP;

  return widthGap || heightGap;
};

export const initSiteProtection = () => {
  if (!import.meta.env.PROD) {
    return () => {};
  }

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (isBlockedShortcut(event)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleDevToolsCheck = () => {
    if (isDevToolsOpen()) {
      redirectToGoogle();
    }
  };

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown, true);
  window.addEventListener("resize", handleDevToolsCheck);

  const devToolsInterval = window.setInterval(handleDevToolsCheck, 1000);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("keydown", handleKeyDown, true);
    window.removeEventListener("resize", handleDevToolsCheck);
    window.clearInterval(devToolsInterval);
  };
};
