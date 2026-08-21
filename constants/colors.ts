/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#F8F4ED',
    tint: '#F36B4F',

    // Core surfaces
    background: '#0D1117',
    foreground: '#F8F4ED',

    // Cards / elevated surfaces
    card: '#151B24',
    cardForeground: '#F8F4ED',

    // Primary action color (buttons, links, active states)
    primary: '#F36B4F',
    primaryForeground: '#0D1117',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#202936',
    secondaryForeground: '#F8F4ED',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#202936',
    mutedForeground: '#9AA5B1',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#E9B867',
    accentForeground: '#0D1117',

    // Destructive actions (delete, error states)
    destructive: '#EF6A6A',
    destructiveForeground: '#0D1117',

    // Borders and input outlines
    border: '#293341',
    input: '#293341',
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;
