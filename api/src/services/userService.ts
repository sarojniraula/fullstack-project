import { UsersDocument } from '../models/Users'

const create = async (user: UsersDocument): Promise<UsersDocument> => {
  return user.save()
}

export default { create }
