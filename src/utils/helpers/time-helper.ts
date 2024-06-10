export const formattedDate = (date: string) => {
    console.log(date);
    const tarihObjesi = new Date(date);
    const gun = String(tarihObjesi.getUTCDate()).padStart(2, '0');
    const ay = tarihObjesi.toLocaleString('tr-TR', { month: 'long', timeZone: 'UTC' });
    const yil = tarihObjesi.getUTCFullYear();
    const saat = String(tarihObjesi.getUTCHours()).padStart(2, '0');
    const dakika = String(tarihObjesi.getUTCMinutes()).padStart(2, '0');
    return `${gun} ${ay} ${yil} ${saat}:${dakika}`;
}