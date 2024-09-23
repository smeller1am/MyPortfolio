export const renderPrice = (price: number | string | undefined) =>
  price === undefined ? price : `${price} ₽`;

export const renderWeight = (weight: number | string | undefined) =>
  weight === undefined ? weight : `${weight} г`;

export const renderPFC = (...grams: (number | string | undefined)[]) =>
  grams.filter(Boolean).map(renderWeight).join(' / ');

export const declination = (int?: number | null) => {
    const commentArray = ["балл", "балла", "баллов"];
    if(int !== null && int !== undefined){
        let absInt = Math.abs(int);
        return (
            commentArray[absInt % 100 > 4 && absInt % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][absInt % 10 < 5 ? absInt % 10 : 5]]
        );
    } else {
        return "";
    }
};

export const getFormattedData = () => {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const dayOfWeek = currentDate.getDay();

   return `${day} ${months[month]}, ${daysOfWeek[dayOfWeek]}`;
}