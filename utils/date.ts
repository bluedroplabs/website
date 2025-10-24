/**
 * Formats a date string into ISO 8601 format for use in dateTime attributes.
 * @param dateString
 * @returns Formatted date string in ISO 8601 format
 */
export const formatDateTimeAttribute = (dateString: string): string => {
  try {
    // Try to parse as a standard date
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toISOString();
    }

    // If it's just a year (e.g., "2024"), create a date for that year
    if (/^\d{4}$/.test(dateString)) {
      return new Date(`${dateString}-01-01`).toISOString();
    }

    // If it's a month/year format (e.g., "January 2024"), try to parse it
    return new Date(dateString).toISOString();
  } catch {
    // Fallback: return the original string if parsing fails
    return dateString;
  }
};
