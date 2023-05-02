export function FormatarData(data){
    const brasilDateTime = formatDateTime(data)
    return brasilDateTime
}

function formatDateTime(data){
    const dateObj = new Date(data);
    const day = dateObj.getUTCDate().toString().padStart(2,"0");
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2,"0");
    const year = dateObj.getUTCFullYear().toString();
    const hours = dateObj.getUTCHours().toString().padStart(2,"0");
    const minutes = dateObj.getUTCMinutes().toString().padStart(2,"0");
    return `${day}/${month}/${year} ${hours} ${minutes}`;
}