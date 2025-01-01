let cappedPurchase;
let bestAmount;
let payAmount;
let amountSaved;

window.onload = function () {
  const unit = document.getElementById('unit').value;
  const unitClassElements = document.getElementsByClassName('unit');

  Array.from(unitClassElements).forEach(function (element) {
    element.innerText = unit;
  });
}

document.getElementById('unit').addEventListener('input', function () {
  const unit = this.value;
  const unitClassElements = document.getElementsByClassName('unit');

  Array.from(unitClassElements).forEach(function (element) {
    element.innerText = unit;
  });

  document.getElementById('bestAmount').innerText = unit + bestAmount.toLocaleString();
  document.getElementById('result').classList.remove('d-none');
  document.getElementById('payAmount').innerText = unit + payAmount.toLocaleString();
  document.getElementById('amountSaved').innerText = unit + amountSaved.toLocaleString();
});

document.getElementById('discountForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const unit = document.getElementById('unit').value;
  const discountPercent = parseFloat(document.getElementById('discountPercent').value);
  const discountCap = parseFloat(document.getElementById('discountCap').value) || Infinity;
  const minimumPurchase = parseFloat(document.getElementById('minimumPurchase').value) || 0;

  cappedPurchase = discountCap / (discountPercent / 100);
  bestAmount = Math.max(Math.round(cappedPurchase), minimumPurchase);
  payAmount = bestAmount - discountCap;
  amountSaved = bestAmount - payAmount;

  document.getElementById('bestAmount').innerText = unit + bestAmount.toLocaleString();
  document.getElementById('result').classList.remove('d-none');
  document.getElementById('payAmount').innerText = unit + payAmount.toLocaleString();
  document.getElementById('amountSaved').innerText = unit + amountSaved.toLocaleString();
});

const translations = {
  en: {
    pageTitle: "Discount Savings Calculator",
    currencyLabel: "Currency",
    discountLabel: "Discount",
    discountCapLabel: "Discount Cap",
    minimumPurchaseLabel: "Minimum Purchase (Optional)",
    calculateButton: "Calculate",
    detailHeader: "Detail",
    valueHeader: "Value",
    bestAmountLabel: "Best Purchase Amount",
    amountSavedLabel: "Amount Saved",
    payAmountLabel: "Amount Needed to Pay",
  },
  id: {
    pageTitle: "Kalkulator Diskon",
    currencyLabel: "Mata Uang",
    discountLabel: "Diskon",
    discountCapLabel: "Batas Maksimal Diskon",
    minimumPurchaseLabel: "Minimum Pembelian (Opsional)",
    calculateButton: "Hitung",
    detailHeader: "Detail",
    valueHeader: "Nilai",
    bestAmountLabel: "Total pembelian terbaik",
    amountSavedLabel: "Total Diskon",
    payAmountLabel: "Total yang Harus Dibayar",
  },
};

function setLanguage(locale) {
  const lang = translations[locale] || translations.en;
  document.getElementById("page-title").textContent = lang.pageTitle;
  document.getElementById("currency-label").textContent = lang.currencyLabel;
  document.getElementById("discount-label").textContent = lang.discountLabel;
  document.getElementById("discount-cap-label").textContent = lang.discountCapLabel;
  document.getElementById("minimum-purchase-label").textContent = lang.minimumPurchaseLabel;
  document.getElementById("calculate-button").textContent = lang.calculateButton;
  document.getElementById("detail-header").textContent = lang.detailHeader;
  document.getElementById("value-header").textContent = lang.valueHeader;
  document.getElementById("best-amount-label").textContent = lang.bestAmountLabel;
  document.getElementById("amount-saved-label").textContent = lang.amountSavedLabel;
  document.getElementById("pay-amount-label").textContent = lang.payAmountLabel;
}

const userLocale = navigator.language.startsWith("id") ? "id" : "en";
setLanguage(userLocale);