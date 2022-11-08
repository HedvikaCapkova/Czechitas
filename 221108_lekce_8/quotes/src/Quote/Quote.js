export const Quote = (props) => {
    const { text, author } = props;

    return `
    <div class="quote">${text}</div>
    <div class="author">${author}</div>   
    `
};

