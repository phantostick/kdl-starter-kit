import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding subscriptions...');

  const subscriptions = [
    {
      client_id: 1,
      title: 'Basic Plan',
      amount: '49.99',
      description: 'Monthly access to basic features',
      sub_title: 'Starter Pack'
    },
    {
      client_id: 2,
      title: 'Pro Plan',
      amount: '99.99',
      description: 'Monthly access to all features including analytics',
      sub_title: 'Professional Pack'
    },
    {
      client_id: 3,
      title: 'Enterprise Plan',
      amount: '199.99',
      description: 'Custom solutions for large teams',
      sub_title: 'Enterprise Grade'
    }
  ];

  for (const subscription of subscriptions) {
    await prisma.subscriptions.create({
      data: subscription
    });
  }

  console.log('✅ Subscriptions seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
