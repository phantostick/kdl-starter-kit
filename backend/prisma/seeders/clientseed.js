import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding clients...');

  const clients = [
    {
      client_name: 'Alpha Technologies',
      email: 'contact@alphatech.com',
      mobile: '9876543201',
      company_name: 'Alpha Technologies Pvt Ltd',
      password: '$2b$10$hashedpassword1', 
      address: '123 Alpha Street, Tech City'
    },
    {
      client_name: 'Beta Innovations',
      email: 'hello@betainno.com',
      mobile: '9876543202',
      company_name: 'Beta Innovations Ltd',
      password: '$2b$10$hashedpassword2',
      address: '456 Beta Road, Startup Valley'
    },
    {
      client_name: 'Gamma Solutions',
      email: 'info@gammasol.com',
      mobile: '9876543203',
      company_name: 'Gamma Solutions Inc',
      password: '$2b$10$hashedpassword3',
      address: '789 Gamma Blvd, Business Park'
    },
    {
        client_name: 'Delta Solutions',
        email: 'info@deltasol.com',
        mobile: '9876543203',
        company_name: 'Delta Solutions Inc',
        password: '$2b$10$hashedpassword3',
        address: '789 Delta Blvd, Business Park'
      }
  ];

  for (const client of clients) {
    await prisma.clients.create({
      data: client
    });
  }

  console.log('Client seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
