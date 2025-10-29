import { format, formatDistanceToNow, parseISO, isValid } from 'date-fns'

/**
 * Format a date for display in listings
 * @param date - Date string, Date object, or number (timestamp)
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export function formatListingDate(date: string | Date | number): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    if (!isValid(dateObj)) return 'Invalid date'
    return format(dateObj, 'MMMM d, yyyy')
  } catch {
    return 'Invalid date'
  }
}

/**
 * Format a date in short format (e.g., "Jan 15, 2024")
 */
export function formatShortDate(date: string | Date | number): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    if (!isValid(dateObj)) return 'Invalid date'
    return format(dateObj, 'MMM d, yyyy')
  } catch {
    return 'Invalid date'
  }
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 months")
 */
export function getRelativeTime(date: string | Date | number): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    if (!isValid(dateObj)) return 'Invalid date'
    return formatDistanceToNow(dateObj, { addSuffix: true })
  } catch {
    return 'Invalid date'
  }
}

/**
 * Format date for input fields (YYYY-MM-D perspectives)
 */
export function formatDateForInput(date: string | Date | number): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date)
    if (!isValid(dateObj)) return ''
    return format(dateObj, 'yyyy-MM-dd')
  } catch {
    return ''
  }
}

