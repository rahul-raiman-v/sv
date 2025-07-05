export interface userAuthType {
    user: {
        fullName: string,
        email: string,
        password: string
    } | null,
    userLogin: (data: {
        email: string | number | readonly string[] | undefined,
        password: string | number | readonly string[] | undefined,
    }) => void;
    userSignUp: (data:{
        fullName: string | number | readonly string[] | undefined,
        email: string | number | readonly string[] | undefined,
        password: string | number | readonly string[] | undefined,
    }) => void;
    checkAuth: () => void;
}