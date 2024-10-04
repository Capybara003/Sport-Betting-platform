export function formatDate(dateString: string) {
    const date = new Date(dateString);
  
    // Get the formatted date part (YYYY-MM-DD)
    const formattedDate = date.toLocaleDateString('en-GB'); // e.g., "2024-10-05"
  
    // Get the hours and determine AM/PM
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    // Combine everything into the desired format
    return `${formattedDate} ${hours}${ampm}`;
  }
  
  const formatted = formatDate('2024-10-05T11:30:00+00:00');
  