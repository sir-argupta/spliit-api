import { createTRPCRouter } from '../../../init'
import { expenseActivityRouter } from './activity'
import { expenseCommentRouter } from './comments'
import { createGroupExpenseProcedure } from './create.procedure'
import { deleteGroupExpenseProcedure } from './delete.procedure'
import { getGroupExpenseProcedure } from './get.procedure'
import { listGroupExpensesProcedure } from './list.procedure'
import { updateGroupExpenseProcedure } from './update.procedure'

export const groupExpensesRouter = createTRPCRouter({
  comments: expenseCommentRouter,
  activity: expenseActivityRouter,
  list: listGroupExpensesProcedure,
  get: getGroupExpenseProcedure,
  create: createGroupExpenseProcedure,
  update: updateGroupExpenseProcedure,
  delete: deleteGroupExpenseProcedure,
})
