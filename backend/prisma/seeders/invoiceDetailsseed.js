import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding invoice details...');

  const invoiceDetails = [
    { name: 'Web Development Service', amount: '2500.00' },
    { name: 'Hosting Charges', amount: '150.75' },
    { name: 'Domain Registration', amount: '12.99' },
    { name: 'Maintenance Fee', amount: '99.00' },
    { name: 'Design Work', amount: '450.50' }
  ];

  for (const detail of invoiceDetails) {
    await prisma.invoice_details.create({
      data: detail
    });
  }

  console.log('Invoice details seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
