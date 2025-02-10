export const light = () => {
  const lightSwitcher = document.querySelector('#light');
  const background = document.querySelector('body');
  const screen = document.querySelector('#screen');
  let isLight = true;

  const onLightClick = isLight => {
    if (isLight) {
      background.style.background = '#ffffff';
      screen.style.background = 'gray';
    } else {
      background.style.background = '#000000';
      screen.style.background = 'rgba(0,0,0,0)';
      screen.style.border = '2px solid white';
    }
  };

  lightSwitcher.onclick = () => {
    isLight = !isLight;
    onLightClick(isLight);
  };
};