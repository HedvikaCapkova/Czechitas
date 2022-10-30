export const Bulb = (props) => {
    const { isOn } = props;
    
    const bulbElm = document.createElement('div');
    bulbElm.classList.add('bulb');
    
    return bulbElm;
};


