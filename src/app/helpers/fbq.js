// lib/fbq.js
export const FB_PIXEL_ID = "802987658475887";

/**
 * Llama a la función fbq solo si existe en window
 */
export const fbq = (...args) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(...args);
  }
};

/**
 * Marca una vista de página
 */
export const pageview = () => {
  fbq("track", "PageView");
};

/**
 * Marca una compra
 * @param {number} value - monto de la compra
 * @param {string} currency - moneda (ej. "MXN", "USD")
 */
export const purchase = (value, currency = "MXN") => {
  fbq("track", "Purchase", { value, currency });
};

/**
 * Marca un lead (registro, suscripción, etc.)
 */
export const lead = () => {
  fbq("track", "Lead");
};

/**
 * Marca un evento personalizado
 * @param {string} eventName - nombre del evento
 * @param {object} params - datos adicionales
 */
export const trackCustom = (eventName, params = {}) => {
  fbq("trackCustom", eventName, params);
};
