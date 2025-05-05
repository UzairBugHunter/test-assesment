// 🔐 Credentials for UI login
export const credentials: { email: string; password: string } = {
  email: "malikuzairabbas2@gmail.com",
  password: "Helloworld@12345",
};

// 🌐 Application URLs
export const urls: { baseUrl: string } = {
  baseUrl: "https://www.automationexercise.com",
};

// 💳 Card test data used during payment flow
export const cardTestData: {
  cardName: string;
  cardNumber: string;
  cvc: string;
  month: string;
  year: string;
} = {
  cardName: "Uzair Abbas",
  cardNumber: "4242424242424242",
  cvc: "123",
  month: "12",
  year: "2026",
};

// 🗄️ PostgreSQL connection config for DB tests
export const postgresConfig: { connectionString: string } = {
  connectionString:
    "postgresql://postgres:mypasswordisuzair@localhost:5432/mydatabase",
};
