let words: string[] = [
    'ESTERNOCLEIDOMASTOIDEO',
    'MURCIELAGO',
    'PNEUMONOULTRAMICROSCOPICSILICOVOLCANICONIOSIS',
    'PROCRASTINACION',
    'HIPOPOTOMONSTROSESQUIPEDALIOFOBIA',
    'PARALELEPIPEDO',
    'AGUACATE',
    'OTORRINOLARINGOLOGO',
    'COMPUTADORA',
    'MECANOGRAFIA',
    'CARTOGRAFIA',
    'INGENIERIA',
    'BROCOLI',
    'REFRACCION',
    'DIESISEISAVO'
];

export function getRandomWord(){

    const randomIndex= Math.floor(Math.random() * words.length);

    return words[randomIndex];
}