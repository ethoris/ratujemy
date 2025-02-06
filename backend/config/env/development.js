module.exports = {
    DB_NAME: 'ratujemy_dane_dev',
    DB_USER: 'mratuj',
    DB_PASSWORD: 'MaksOla2020', // Hasło bez znaków specjalnych, na próbę
    DB_HOST: 'localhost',
    DB_PORT: 5432,
    JWT_SECRET: 'd2be91e25c0866ac02c616f6d60bef14605441a12fc08ef55b6113364899cbf87314c955c27469d2bf2c3429b7237093e5d6ce9af7ca6d8173739b07a549dc92b4619b0d86b0510097c1bd755055961cc10bfb2d4eacf572d2287ee6f6f57e1c494e42c6ed5b60c24c2cbbe8b1b57056eeb5ac5fff6644137831959346993961f1da4b1ac2e0c32c35f200aa286a19621bfa61b964c1b63231e1df6dd9b79cff3681a9582d8724960906d76090f7a995bba702a04bf2f8614a44355e2c61a44c21a725e412e4b41a5b1e0ac01acc8eb27297b4fd0a4b4429c4fb5450b8af1b8f49a2faba15b6a7af195310f21bd20057b22c0f2d228476b636f403a82df30879',
    REDIS_URL: 'redis://localhost:6379',
    PORT: 4000,
    SMTP_HOST: 'ssl0.ovh.net',  // Jeśli OVH → zmień na 'ssl0.ovh.net'
    SMTP_PORT: 465,             // Można użyć 465 dla SSL
    SMTP_USER: 'biuro@ratujemydane.pl',
    SMTP_PASSWORD: 'Borch34ti@',
    EMAIL_SENDER: 'biuro@ratujemydane.pl'  // Twój e-mail firmowy
  };
  