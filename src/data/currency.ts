const USD_CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });
  
  const INR_CURRENCY_FORMATTER = new Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
  });
  
  export function formatCurrency(number: number, currencyCode = "INR") {
    if (currencyCode === "USD") {
      return USD_CURRENCY_FORMATTER.format(number);
    } else if (currencyCode === "INR") {
      return INR_CURRENCY_FORMATTER.format(number);
    } else {
      throw new Error("Unsupported currency code");
    }
  }
  