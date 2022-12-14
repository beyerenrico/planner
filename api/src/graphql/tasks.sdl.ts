export const schema = gql`
  type Task {
    id: Int!
    name: String!
    body: String!
    isCompleted: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    name: String!
    body: String!
    isCompleted: Boolean!
  }

  input UpdateTaskInput {
    name: String
    body: String
    isCompleted: Boolean
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
