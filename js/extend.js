export const extend = () => {
  let isExtended = false;
  const extendBtn = document.querySelector('#extend');
  const field = document.querySelector('.col0');

  const onExtend = isExtended => {
    if (isExtended) {
      field.style.opacity = '1';
    } else {
      field.style.opacity = '0';
    }
  };

  extendBtn.onclick = () => {
    isExtended = !isExtended;
    onExtend(isExtended);
  };
};
