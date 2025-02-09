import { z } from 'zod'
import { addComment } from '../../../../../lib/api'
import { baseProcedure } from '../../../../init'

export const createExpenseCommentProcedure = baseProcedure
  .input(
    z.object({
      expenseId: z.string().min(1),
      participantId: z.string(),
      text: z.string(),
    }),
  )
  .mutation(async ({ input: { expenseId, participantId, text } }) => {
    const comment = await addComment(expenseId, participantId, text)
    return { commentId: comment.id }
  })
