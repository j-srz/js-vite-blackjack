/**
 * 
 * @param {Array<String>} deck es un arreglo de string Ejemplo: [1C, AS, 7H...]
 * @returns {String} Devuelve la ultima carta del deck
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}