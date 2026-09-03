/**
 * Single source of truth for NAP, URLs, and entity IDs used in visible copy and JSON-LD.
 */
export const SITE_URL = 'https://www.vegas55plushomes.com'
export const SITE_NAME = 'Del Webb at Lake Las Vegas | Homes by Dr. Jan Duffy'
export const SITE_SHORT_NAME = 'Vegas 55 Plus Homes'
export const AGENT_NAME = 'Dr. Jan Duffy'
export const LICENSE = 'S.0197614'
export const PHONE_DISPLAY = '(702) 996-3758'
export const PHONE_TEL = '7029963758'
export const PHONE_SCHEMA = '+17029963758'
export const EMAIL = 'DrDuffySells@Vegas55PlusHomes.com'
export const STREET_ADDRESS = '28 Lake Oasis St'
export const ADDRESS_LOCALITY = 'Henderson'
export const ADDRESS_REGION = 'NV'
export const POSTAL_CODE = '89011'
export const ADDRESS_COUNTRY = 'US'
export const FULL_ADDRESS = `${STREET_ADDRESS}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${POSTAL_CODE}`
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=28+Lake+Oasis+St+Henderson+NV+89011'
/** Lake Las Vegas, Henderson, NV — community location for 28 Lake Oasis St. */
export const GEO = {
  latitude: '36.102',
  longitude: '-114.928',
}

export const ORG_ID = `${SITE_URL}#organization`
export const AGENT_ID = `${SITE_URL}#realestateagent`
export const WEBSITE_ID = `${SITE_URL}#website`
export const PERSON_ID = `${SITE_URL}#dr-jan-duffy`

export const OPENING_HOURS = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  { days: ['Saturday'], opens: '10:00', closes: '16:00' },
] as const
