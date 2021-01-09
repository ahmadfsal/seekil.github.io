export const scrollToView = (elementId) => {
    if (elementId) {
        document.getElementById(elementId).scrollIntoView({
            behavior: 'smooth',
        });
    }
};
