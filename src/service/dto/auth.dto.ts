export interface LoginQueryDto {
  studentId: number

  password: string
}

export interface RegisterQueryDto {
  studentId: number

  password: string

  email: string

  username: string
}
