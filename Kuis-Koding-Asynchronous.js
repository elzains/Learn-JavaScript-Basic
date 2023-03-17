const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');
async function getTollAccess() {
  try {
    const card = await buyTollRoadCard(25);
    const cardWithBalance = await topUpBalance(card, 10);
    await useTollRoad(cardWithBalance);
  } catch (error) {
    console.log(error.message);
  }
}
// Jangan hapus kode di bawah ini
getTollAccess();