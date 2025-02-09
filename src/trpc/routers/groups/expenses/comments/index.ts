import { createTRPCRouter } from '../../../../init'
import { createExpenseCommentProcedure } from './create.procedure'
import { deleteExpenseCommentProcedure } from './delete.procedure'
import { getExpenseCommentProcedure } from './get.procedure'
import { listExpenseCommentsProcedure } from './list.procedure'
import { updateExpenseCommentProcedure } from './update.procedure'

export const expenseCommentRouter = createTRPCRouter({
  list: listExpenseCommentsProcedure,
  get: getExpenseCommentProcedure,
  create: createExpenseCommentProcedure,
  update: updateExpenseCommentProcedure,
  delete: deleteExpenseCommentProcedure,
})
