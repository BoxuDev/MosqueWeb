export const convertDate = (time: any) => {
    return new Date(time).toUTCString();
}