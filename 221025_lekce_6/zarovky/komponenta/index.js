export const Bulb = (isOn) => {
    
    const bulbElm = document.createElement('div');
    bulbElm.classList.add('bulb');
    isOn && bulbElm.classList.add('bulb--on');
    
    return bulbElm;
};


