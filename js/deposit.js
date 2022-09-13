// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // console.log(newDepositAmount)
  if(isNaN(newDepositAmount)){
    alert('Please enter an amount')
    return
  }
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // console.log(previousDepositTotal)

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total",newBalanceTotal);
});
