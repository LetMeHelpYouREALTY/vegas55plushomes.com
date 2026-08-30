/**
 * RealScout office listings. Script loads from em.realscout.com; API calls go
 * to www.realscout.com. Both hosts belong in CSP script-src and connect-src.
 * Load the UMD script once in the root layout — do not mount it per page.
 */
export const REALSCOUT_SCRIPT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js'

export const REALSCOUT_AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw'

/** Office listings with no invented price filters. */
export const REALSCOUT_OFFICE_LISTINGS_HTML = `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC"></realscout-office-listings>`
