const baseUrl = "http://localhost:8080/api"

export const endPoint = {
    login: `${baseUrl}/auth/login`,
    signup: `${baseUrl}/auth/signup`,

    getAllExams: `${baseUrl}/exam/get-all-exams`,
    getQuestionsByExamId: (examId: number) => `${baseUrl}/question/get-all-questions/${examId}`
}