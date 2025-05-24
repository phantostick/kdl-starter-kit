import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding payment methods...');

  const paymentMethods = [
    {
      payment_method_name: 'Stripe',
      display_name: 'Stripe Payment Gateway',
      slug: 'stripe',
      sandbox_key: 'sk_test_1234567890abcdef',
      sandbox_secret: 'ss_test_abcdef1234567890',
      live_key: 'sk_live_1234567890abcdef',
      live_secret: 'ss_live_abcdef1234567890',
      publish: 1,
      sort: 1
    },
    {
      payment_method_name: 'PayPal',
      display_name: 'PayPal Express Checkout',
      slug: 'paypal',
      sandbox_key: 'sandbox-paypal-key',
      sandbox_secret: 'sandbox-paypal-secret',
      live_key: 'live-paypal-key',
      live_secret: 'live-paypal-secret',
      publish: 1,
      sort: 2
    },
    {
      payment_method_name: 'Razorpay',
      display_name: 'Razorpay Gateway',
      slug: 'razorpay',
      sandbox_key: 'rzp_test_abc123',
      sandbox_secret: 'rzp_test_secret123',
      live_key: 'rzp_live_def456',
      live_secret: 'rzp_live_secret456',
      publish: 0,
      sort: 3
    }
  ];

  for (const method of paymentMethods) {
    await prisma.payment_methods.create({
      data: method
    });
  }

  console.log('✅ Payment methods seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
