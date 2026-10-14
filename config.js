window.CONFIG = {
  APP_NAME: "PsychoTest",

  // Clé PUBLIQUE de vérification : elle permet de contrôler un code, jamais d'en créer.
  // Ne la modifiez pas, sinon tous les codes cesseront de fonctionner.
  PUBLIC_KEY: {"kty": "EC", "crv": "P-256", "x": "iaMzb-jlgVKDbEAUk-2GoDha8vP1IYBQV0d2gQ2yfyc", "y": "kve5zBWh55ZISyQZAyKHjD8WQj8xA9UMmRN9Y5LhgrU"},

  PRICE_LABEL: "5 $ paiement unique",

  WHATSAPP: "243850800833",

  FREE_PER_CAT: 5,

  PAYMENTS: [
    { name: "Airtel Money", value: "Retrait sur 0972175034 (SIM agent)" },
    { name: "Orange Money", value: "Dépôt sur 0842403168" },
    { name: "USDT (BEP20)", value: "0x619a4571d25e0becDb82Dc2F2Efd3f2e72f68379" },
    { name: "Bitcoin (BTC)", value: "bc1qm52mezaw6t0r0lptlzhsdf53dknumyfyjdvaws" },
    { name: "Ethereum (ETH)", value: "0x619a4571d25e0becDb82Dc2F2Efd3f2e72f68379" },
    { name: "Solana (SOL)", value: "F1pijsNDh7nwSaqtCmsiTLNozDhfnSykauLt6vSKbBDH" }
  ]
};
