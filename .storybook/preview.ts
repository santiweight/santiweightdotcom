import * as userPreviewModule from "./preview.logos-user"
import { withLogosComments } from "./.logos/CommentLayer"

const userDefault = (userPreviewModule as any).default ?? {}
const userDecorators = [
  ...((userPreviewModule as any).decorators ?? []),
  ...(userDefault.decorators ?? []),
]

const preview = {
  ...userPreviewModule,
  ...userDefault,
  parameters: {
    ...((userPreviewModule as any).parameters ?? {}),
    ...(userDefault.parameters ?? {}),
    nextjs: {
      ...((userPreviewModule as any).parameters?.nextjs ?? {}),
      ...(userDefault.parameters?.nextjs ?? {}),
      appDirectory: true,
    },
  },
  decorators: [...userDecorators, withLogosComments],
}

export default preview
