export const chunkArr = <T>(arr: Array<T>, chunkSize: number) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunked.push(arr.slice(i, i + chunkSize));
  }
  return chunked;
};

export const formatPhoneNumber = (event: any) => {
  let newValue = event.target.value.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d\d)(\d)/g, '($1)$2');
  newValue = newValue.replace(/(\d{5})(\d)/, '$1-$2');

  event.target.value = newValue;

  return event.target.value;
};
