import { z } from 'zod'
import { deleteComment } from '../../../../../lib/api'
import { baseProcedure } from '../../../../init'

export const deleteExpenseCommentProcedure = baseProcedure
  .input(
    z.object({
      commentId: z.string().min(1),
    }),
  )
  .mutation(async ({ input: { commentId } }) => {
    await deleteComment(commentId)
    return {}
  })
