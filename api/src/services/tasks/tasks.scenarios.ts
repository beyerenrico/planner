import type { Prisma, Task } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        name: 'String',
        body: 'String',
        updatedAt: '2022-12-12T22:17:03.286Z',
      },
    },
    two: {
      data: {
        name: 'String',
        body: 'String',
        updatedAt: '2022-12-12T22:17:03.286Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
