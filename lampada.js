/* 

Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

RESPOSTA:

Primeiramente eu ligaria o primeiro interruptor e o deixaria ligado por alguns minutos,
Depois eu desligaria o primeiro interruptor e ligaria o segundo,

Iria a primeira vez para uma sala,
Se naquela sala a lâmpada estivesse apagada e fria -> o terceiro interruptor não controla aquela lâmpada
Se naquela sala a lâmpada estivesse apagada e quente -> o primeiro interruptor controla aquela lâmpada
Se naquela sala a lâmpada estivesse acesa -> o segundo interruptor controla aquela lâmpada

Sabendo qual dos interruptores controla uma das salas agora eu desligaria todos os interruptores e ligaria somente um dos interruptores que eu não soubesse qual sala controla

Iria a segunda vez para outra sala
Nessa sala, ou a lâmpada estaria acesa e o interruptor que ficou ligado seria o que controla essa sala,
Ou a lâmpada estaria apagada e fria, sendo assim, esse interruptor ligado controlaria a outra sala restante,
Assim eu descobriria quais interruptores controlam quais salas com apenas duas ida as salas.

*/
