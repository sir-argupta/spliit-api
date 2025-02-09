'use server'

import { prisma } from './prisma'

export type Stats = {
  groupsCount: number
  expensesCount: number
}

export async function getStatsAction(): Promise<Stats> {
  'use server'
  const groupsCount = await prisma.group.count()
  const expensesCount = await prisma.expense.count()
  return { groupsCount, expensesCount }
}
