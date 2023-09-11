/**
 * 
 * @param {String} carta Ejemplo: 4H
 * @returns {Number} Regresa el valor de la carta que recibe
 */
export const valorCarta = (carta) => {


  if (!carta || carta.length === 0) throw new Error('Debes pasar una carta')

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
