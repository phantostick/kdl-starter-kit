import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding invoices...');

  // NOTE: Replace client_id and invoice_details_id with valid existing IDs in your database
  const invoices = [
    {
      client_id: 1,
      invoice_no: 'INV-1001',
      amount: '2500.00',
      tax: '100.00',
      gst: '50.00',
      mail_sent: 1,
      issue_date: new Date('2024-05-01'),
      due_date: new Date('2024-05-15'),
      payment_status: 'Paid',
      invoice_details_id: 1
    },
    {
      client_id: 2,
      invoice_no: 'INV-1002',
      amount: '1500.00',
      tax: '75.00',
      gst: '35.00',
      mail_sent: 0,
      issue_date: new Date('2024-05-10'),
      due_date: new Date('2024-05-20'),
      payment_status: 'Pending',
      invoice_details_id: 2
    },
    {
      client_id: 3,
      invoice_no: 'INV-1003',
      amount: '3000.00',
      tax: '120.00',
      gst: '60.00',
      mail_sent: 1,
      issue_date: new Date('2024-05-12'),
      due_date: new Date('2024-05-25'),
      payment_status: 'Overdue',
      invoice_details_id: 3
    },
    {
      client_id: 4,
      invoice_no: 'INV-1004',
      amount: '2000.00',
      tax: '50.00',
      gst: '25.00',
      mail_sent: 1,
      issue_date: new Date('2024-05-15'),
      due_date: new Date('2024-05-25'),
      payment_status: 'Paid',
      invoice_details_id: 4
    }
  ];

  for (const invoice of invoices) {
    await prisma.invoices.create({
      data: invoice
    });
  }

  console.log('Invoices seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
