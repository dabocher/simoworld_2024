export interface CreateUserParams {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo: string;
}

export interface UpdateUserParams extends CreateUserParams {
  updatedAt: Date;
}
