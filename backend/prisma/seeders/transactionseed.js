import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding transactions...');

  const transactions = [
    {
      client_id: 1,
      invoice_id: 1,
      payment_method_id: 1,
      amout: '149.99',
      payment_status: 'Paid',
      payment_date: new Date('2025-05-10')
    },
    {
      client_id: 2,
      invoice_id: 2,
      payment_method_id: 2,
      amout: '299.00',
      payment_status: 'Pending',
      payment_date: new Date('2025-05-15')
    },
    {
      client_id: 3,
      invoice_id: 3,
      payment_method_id: 3,
      amout: '499.50',
      payment_status: 'Failed',
      payment_date: new Date('2025-05-18')
    }
  ];

  for (const txn of transactions) {
    await prisma.transactions.create({
      data: txn
    });
  }

  console.log('✅ Transactions seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
