const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error : ", err));

module.exports = { prisma };