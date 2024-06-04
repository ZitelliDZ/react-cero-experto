export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState = {
    status: 'authenticated',
    uid: 'ABC567',
    email: 'asd@asd.asd',
    displayName: 'asd',
    photoURL: 'https://asdasd.com/asd.jpg',
    errorMessage: null
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    status: 'authenticated',
    email: 'demo@asd.asd',
    uid: 'demo123',
    displayName: 'Demo User',
    photoURL: 'https://asdasd.com/asd.jpg',
    errorMessage: null
}
    