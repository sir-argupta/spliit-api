import { createTRPCRouter } from '../../../../init'
import { listExpenseActivityProcedure } from './list.procedure'

export const expenseActivityRouter = createTRPCRouter({
  list: listExpenseActivityProcedure,
})
