const convertButton = document.querySelector(".convert-button");
const currencySelectPara = document.querySelector(".currency-select");
const cleanButton = document.querySelector(".clean-button");
const selectConverterDe = document.querySelector(".select-convert");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");
  const inputCurrenyMoney = document.querySelector(".input-currency").value;

  const realDolar = inputCurrenyMoney / 4.99;
  const realEuro = inputCurrenyMoney / 5.44;
  const realLibra = inputCurrenyMoney / 6.36;
  const dolarEuro = inputCurrenyMoney / 1.08;
  const dolarReal = inputCurrenyMoney / 0.20;
  const dolarLibra = inputCurrenyMoney / 1.27;
  const euroDolar = inputCurrenyMoney / 0.91;
  const euroLibra = inputCurrenyMoney / 1.16;
  const euroReal = inputCurrenyMoney / 0.18;
  const libraDolar = inputCurrenyMoney / 0.78;
  const libraEuro = inputCurrenyMoney / 0.85;
  const libraReal = inputCurrenyMoney / 0.15;

  // Real Brasileiro

  if (
    selectConverterDe.value === "real" &&
    currencySelectPara.value == "dollar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(realDolar);
  }

  if (
    selectConverterDe.value === "real" &&
    currencySelectPara.value === "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(realEuro);
  }

  if (
    selectConverterDe.value === "real" &&
    currencySelectPara.value === "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(realLibra);
  }

  // Dolar Americano

  if (
    selectConverterDe.value === "dollar" &&
    currencySelectPara.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(dolarEuro);
  }

  if (
    selectConverterDe.value === "dollar" &&
    currencySelectPara.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(dolarLibra);
  }

  if (
    selectConverterDe.value === "dollar" &&
    currencySelectPara.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(dolarReal);
  }

  // Euro

  if (
    selectConverterDe.value === "euro" &&
    currencySelectPara.value == "dollar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(euroDolar);
  }

  if (
    selectConverterDe.value === "euro" &&
    currencySelectPara.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(euroLibra);
  }

  if (
    selectConverterDe.value === "euro" &&
    currencySelectPara.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(euroReal);
  }

  // Libra

  if (
    selectConverterDe.value === "libra" &&
    currencySelectPara.value == "dollar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(libraDolar);
  }

  if (
    selectConverterDe.value === "libra" &&
    currencySelectPara.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(libraEuro);
  }

  if (
    selectConverterDe.value === "libra" &&
    currencySelectPara.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(libraReal);
  }

  // convertValues()
}

function changeCurrencyDe() {
  const currencyConverter = document.getElementById("currency-converter-de");
  const currencyImgConvert = document.querySelector(".currency-img-convert");

  if (selectConverterDe.value == "dollar") {
    currencyConverter.innerHTML = "Dólar Americano";
    currencyImgConvert.src = "./assets/dollar.png";
  }
  if (selectConverterDe.value == "euro") {
    currencyConverter.innerHTML = "Euro";
    currencyImgConvert.src = "./assets/euro.png";
  }
  if (selectConverterDe.value == "real") {
    currencyConverter.innerHTML = "Real Brasileiro";
    currencyImgConvert.src = "./assets/real.png";
  }
  if (selectConverterDe.value == "libra") {
    currencyConverter.innerHTML = "Libra";
    currencyImgConvert.src = "./assets/libra.png";
  }

  convertValues();
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelectPara.value == "dollar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dollar.png";
  }
  if (currencySelectPara.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }
  if (currencySelectPara.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assets/real.png";
  }
  if (currencySelectPara.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/libra.png";
  }

  convertValues();
}

function cleanForm() {
  document.querySelector(".input-currency").value = "";

  document.querySelector(".currency-value-to-convert").innerHTML = "R$ 0,00";
  document.querySelector(".currency-value").innerHTML = "$ 0,00";

  document.querySelector(".select-convert").value = "selecionar";
  document.querySelector(".currency-select").value = "selecionar";

  changeCurrency();
}

selectConverterDe.addEventListener("change", changeCurrencyDe);
currencySelectPara.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues, currencySelectPara);
cleanButton.addEventListener("click", cleanForm);
