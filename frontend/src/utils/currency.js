export const  formatPrice  = (value, currency) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency });
};

