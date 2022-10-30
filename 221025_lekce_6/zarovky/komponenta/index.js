export const Bulb = (isOn) => {
    
    const bulbElm = document.createElement('div');
    bulbElm.classList.add('bulb');
    bulbElm.onclick = () => myClick(bulbElm);
    isOn && bulbElm.classList.add('bulb--on');
    
    return bulbElm;
};

const myClick = (element) => {
    element.classList.toggle("bulb--on");
}