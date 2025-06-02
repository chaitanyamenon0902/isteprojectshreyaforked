const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function test() {
  const projects = await prisma.project.findMany();
  console.log(projects);
}

test();
